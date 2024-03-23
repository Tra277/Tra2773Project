// đơn giản là dùng cái này có thể fake ra được cái API server, giúp cho các bạn không biết API backend
//REST API Là một cái quy chuẩn để tạo ra API
//==> có thể tạo ra sản phẩm nó ngầu hơn
var courseApi = 'http://localhost:3000/courses';

fetch(courseApi)
    .then(function(response){
        return response.json();
    })
    .then(function(courses){
        console.log(courses);
    });