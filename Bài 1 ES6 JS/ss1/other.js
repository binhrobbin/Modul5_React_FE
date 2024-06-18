// Rest param
// const sum = (...items) => {

// }
// sum(1,2,3,4,5, 6);

// Spread operator (sao chép và gộp mảng/ object)
let a = [1,2,3];
let c = [4,5,6]
let b = [...a, ...c];
console.log(b)

let obj = {
    a: 1
}

let obj2 = {
    b: 1,
    a: 2
}

let obj3 = {
    obj,
    ...obj2,
    c: 3
}
console.log(obj3)

// // Dstructoring
// let obj = {
//     name: "Hai",
//     age: 18
// }
//
// let {name, age} = obj;
// // let name = obj.name;
// // let age = obj.age;
// console.log(name);
// console.log(age);
//
// let arr = [1,2,3];
// let [a,...b] = arr;
// console.log(a)
// console.log(b)
