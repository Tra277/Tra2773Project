// Nhớ viết hoa chữ cái đầu của object constructor ( Quy ước chung)

function User(fisrtName, lastName, avatar){
    this.firstName = fisrtName;
    this.lastName = lastName;
    this.avatar = avatar;
    this.getName = function() {
        return `${this.firstName} ${this.lastName}`;
    }

}

var user = new User('Son','Dang','avatar1');
var user2 = new User('Vu','Nguyen','avatar2');

//ta vẫn có thể thêm thuộc tính và phương thức mà không bị ảnh hưởng bởi bản thiết kế
user2.title = ' CHia sẻ dạo tại F8';
user.comment = 'có cái l'

//object prototye - basic
// Cách để thêm thuộc tính vào constructor
//thêm prototype sau tên hàm constructor, tuy nhiên nó không nhận được giá trị truyền vào ở hàm tạo
User.prototype.className = 'F8';






console.log(user.className);
console.log(user2);