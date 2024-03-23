// là hàm được truyền qua đối số khi gọi hàm khác

//1. là hàm
//2. Được truyền qua đối số

function myFunction(param) {
    if(typeof param === 'function'){
        param('Học lập trình');
    }
}

function myCallback(value){
    console.log('Value: ',value);
}


// Lúc này thì param() = myCallback();
myFunction(myCallback);


