Array.prototype.filter2 = function(callback){
    var output = [];

    for(var i in this){
        if(this.hasOwnProperty(i)){
            var result = callback(this[i],i,this);
            if(result){
                output.push(this[i]);
            }
        }
    }
    return output;
};

var courses = [
    {
        name:'Javascript',
        coin:680
    },
    {
        name:'PHP',
        coin:860
    },
    {
        name:'Ruby',
        coin:980
    }
];

var filterCourses = courses.filter2(function(course,index,array){
    return course.coin >700;
});
//không lặp qua mảng rỗng
console.log(filterCourses); 