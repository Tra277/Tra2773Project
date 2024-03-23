//every():Giống some() nhưng tất cả phần tử phải thỏa mãn điều kiện, some() thí chỉ cần tồn tại phần tử thỏa mãn điều kiện
Array.prototype.every2 = function(callback){
    
    for (var index in this){
        if(this.hasOwnProperty(index)){
            if(callback(this[index],index,this)===false){
                return false;
            }
        }
    }
    return true;
}

var courses = [
    {
        name:'Javascript',
        coin:680,
        isFinish:true
    },
    {
        name:'PHP',
        coin:860,
        isFinish:true
    },
    {
        name:'Ruby',
        coin:980,
        isFinish:true
    }
];

var result = courses.every2(function(course,index,array){
    return course.isFinish;
});
console.log(result);