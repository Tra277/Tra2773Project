var myInfo={
    name: 'Son Dang',
    age:18,
    address:'Hanoi, VN',
    getName: function(){
        return this.name;
    }
};

//truyền thêm key mới vào ( không cần phải dùng var)
myInfo.email = 'tradshe172241@fpt.edu.vn';

//xóa một thuộc tính ( key)
delete myInfo.age;


console.log(myInfo.getName());