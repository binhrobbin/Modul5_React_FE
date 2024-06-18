// function sum(a, b) {
//     console.log(a + b);
// }
// console.log( sum(1,2));
// console.log( sum(2,3));
// function sum(a, b) {
//     return sum = a + b
// }

// console.log(sum(3,5));
// function sum(a, b) {
//     return a + b
// }
// ->: java lambda // Java 8
// Arrow function
// Không có {} hoặc sử dụng () => thì mặc định là return
// let sum = (a,b) => a+b;
// console.log( sum(1,2));
// Khác nhau của declare function và arrow function
// Arrow ngắn gọn hơn
// Arrow không có hoisted

// let Dog = (name, age) => {
//     this.name = name;
//     this.age = age;
// }
// function Dog(name, age) {
//     this.name = name;
//     this.age = age;
// }
let Dog = function(name, age) {
    this.name = name;
    this.age = age;
}

let dog = new Dog("a", 1);
console.log(dog);

// This trong arrow
// khai báo kiểu object literal (để khai báo JSON)
let obj = {
    a: 1,
    b: () => {
        console.log(this, this.a)
    },
    c: function () {
        console.log(this, this.a);
    }
}
obj.b();
obj.c();
// kết luận: không nên dùng arrow trong khi làm việc với đối tượng
