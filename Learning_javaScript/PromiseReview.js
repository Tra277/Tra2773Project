//DEMO Bất đồng bộ

// function test() {
//     setTimeout(function () {
//         console.log('1');
//     }, 0);
//     console.log('2');
//     console.log('3');

// }
// test();

//3 cách để xử lý bất đồng bộ:CALL BACK,Promises,async await
//tuy nhiên callback lại hay
//2 trạng thái : thực hiện được lời hứa or thất hứa
//một object để đại điện cho một hành động thực hiện bất đồng bộ thành công hay thất bại
//pending:trạng thái đang chờ thực hiện hành vi bất đồng bộ, chưa biết được thành công hay thất bại
//thành công : resolve (hoàn thành xong promise)
//thất bại:reject (promise không được thực hiện thành công )

//Demo PRomIse
//resolve và reject sẽ tương ứng với hai function, sẽ được gọi tương ứng khi thành công hay thất bại
const currentPromise = new Promise(function (resolve, reject) {
    let condition = false;
    if (condition) {
        setTimeout(function () {
            resolve('success');
        }
            , 3000);
    }else{
        reject("Error");
    }

});
//PROMISE2 ở đây

//SỬ DỤNG PROMISE
//gọi đến tên của Promise
currentPromise
    //then nhận vào một function , dữ liệu mà nó trả về thành công (resolve)
    //data ở đây sẽ tương ứng với  'success'
    .then(function(data){
        console.log(data);
        //có thể return tiếp promise khác( giống lồng callback) và .then ở dưới để thực thi promise khác đó khi thành công
        //return PROMISE2;
    })
    //.then để sử dụng tiếp PROMISE2

    //Khi promise không thể thực thi thì sẽ gọi đến catch
    .catch(function(data){
        console.log(data);
    })

//==> Promise có thế giúp mô tả function dưới dạng các chuỗi .then cùng cấp kể từ đó tránh lồng callback trông rất rối rắm (callback hell)

//ASYNC AWAIT giúp viết code bất đồng bộ như đồng bộ