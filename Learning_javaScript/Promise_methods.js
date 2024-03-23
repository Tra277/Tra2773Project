//1.Promise.resolve
//2.Promise.reject
//3.Promise.all: dùng để hợp nhất, chạy song song

//Thư viện output luôn luôn là một promise
var promise = new Promise(function(resolve,reject){
    //resolve('success!');
    reject('Error!');
});

promise
    .then(function(result){
        console.log('result: ',result);
    })
    .catch(function(err){
        console.log('err: ',err);
    });

var promise1 = new Promise(function(resolve){
    setTimeout(function(){
       resolve([1]); 
    },2000)
});

var promise2 = new Promise(function(resolve){
    setTimeout(function(){
        resolve([2,3]);
    },5000)
});

Promise.all([promise1,promise2])
    .then(function(result){
        var result1 = result[0];
        var result2 = result[1];

        console.log(result1.concat(result2));
    });