var postApi = 'https://jsonplaceholder.typicode.com/posts';

//fetch ở đây là một promise (nó sẽ return về một Promise)
fetch(postApi)
    .then(function(response){
        return response.json();
        //nó sẽ trả về cho các bạn một Promise, promise này sẽ resolve trả về đoạn mã Javascript mà nó parse được
        //JSON.parse: JSON -> JavaScript
    })
    .then(function(posts){
        var htmls = posts.map(function(post){
            return `<li>
            <h2>${post.title}</h2>
            <h2>${post.body}</h2>
            </li>`
        });
        var html = htmls.join('');
        document.getElementById('post-block').innerHTML = html;
    })
    .catch(function(err){
        console.log(err);
    });