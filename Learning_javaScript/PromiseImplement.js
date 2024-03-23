//Khởi tạo một đối tượng promise
//promise sẽ nhận vào một function
var promise = new Promise(
    //Excutor
    //hai tham số truyền vào có thể hiểu là thành công hay thất bại
    function (resolve, reject) {
        //logic
        //Thành công: resolve()
        //Thất bại: reject()
        //Fake call API 
        resolve();
    }
);
//3 thằng phương thức rất hay sử dụng
//.then(function)
//.catch(function)
//.finally(function)

//Promise chain
//có thể lặp lại then, catch,finally...
 //thằng đằng sau sẽ nhận cái đối số truyền vào là dữ liệu trả về của thằng đằng trước
//nếu dữ liệu trả về là một promise thì các method như then hay catch vẫn sẽ chờ đợi promise được thực thi,đảm bảo được thực hiện tuần tự
//==> Giải quyết được vấn đề bất đồng bộ
 promise
    .then(function () {
        console.log('1');
    })
    .then(function () {
        console.log('2');
    })
    .then(function () {
        console.log('3');
    })
    .catch(function () {
        console.log('Failure!');
    })
    .finally(function () {
        console.log('Done');
    });
    //Trả lời phỏng vấn: Là một khái niệm sinh ra để xử lý các vấn đề về bất đồng bộ,trước kia chúng ta thường sử dụng
    //call back dẫn đến vấn đề callback hell