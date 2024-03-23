Array.prototype.map2 = function(callback){
    var output = [];
    for(var i =0;  i< this.length;i++){
       var result = callback(this[i],i);
       output.push(result);
    }
    return output;
}

var courses = [
    'Java',
    'Ruby',
    'PHP'
];

var htmls = courses.map2(function(courses){
    return `<h2>${courses}</h2>`;
});
console.log(htmls.join(''));