//some():cho biết liệu có tồn tại phần tử nào thỏa mãn điều kiện của bạn hay không. Trả về giá trị boolean
//hàm không chạy qua các phần tử rỗng
Array.prototype.some2 = function(callback){
    
    for (var index in this){
        if(this.hasOwnProperty(index)){
            if(callback(this[index],index,this)){
                return true;
            }
        }
    }
    return false;
}

var courses = [
    {
        name:'Javascript',
        coin:680,
        isFinish:false
    },
    {
        name:'PHP',
        coin:860,
        isFinish:false
    },
    {
        name:'Ruby',
        coin:980,
        isFinish:false
    }
];

var result = courses.some2(function(course,index,array){
    return course.isFinish;
});
console.log(result);