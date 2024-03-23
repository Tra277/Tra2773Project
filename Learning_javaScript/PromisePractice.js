var users = [
    {
        id: 1,
        name: 'Kien Dam'
    },
    {
        id: 2,
        name: 'Son Dang'
    },
    {
        id: 3,
        name: 'Hung dam'
    }
    //...
];

var comments = [
    {
        id: 1,
        user_id: 1,
        content: 'Anh Son chua ra video a'
    },
    {
        id: 2,
        user_id: 2,
        content: 'Vua ra xong em oi'
    },
    {
        id: 3,
        user_id: 1,
        content: 'Dit me anh'
    }
];
//Các bước
//1Lấy comment
//2Từ comments lấy ra user_id
//3.từ user_id lấy ra user tương ứng

//Fake api
function getComments() {
    return new Promise(function (resolve) {
        //Settimeout Giả lập cái internet bị chậm
        setTimeout(function () {
            resolve(comments);
        }, 1000);
    });
}

//từ userid trỏ đến user để lọc ra 2 ông tương ứng
function getUsersByIds(userIds) {
    return new Promise(function (resolve) {
        var result = users.filter(function (user) {
            return userIds.includes(user.id);
        });
        setTimeout(function () {
            resolve(result);
        }, 1000);
    });
}

getComments()
    .then(function (comments) {
        //sử dụng hàm map để lấy ra user id
        var userIds = comments.map(function (comment) {
            return comment.user_id;
        });
        //lấy được userid thì truyền vào cái GetusersById
        return getUsersByIds(userIds)
            .then(function (users) {
                return {
                    users: users,
                    comments:comments,
                }
            });
    }) //==> viết hàm getUser dựa theo user id
//Nếu chỉ mỗi thế này thì mình chưa thể lấy ra được tên của người comment
//cần đến user_id để trỏ đến user ==> sửa lại getComments để lấy ra userId
    //cái users ở then này nó sẽ nhận cái return user ở trên
    .then(function(data){
        var commentBlock = document.getElementById('comment-block');
        var html='';
        data.comments.forEach(function(comment){
            var user = data.users.find(function(user){
                return user.id === comment.user_id;
            });
            html += `<li>${user.name}:${comment.content}</li>`;
        });
        commentBlock.innerHTML = html;
    });