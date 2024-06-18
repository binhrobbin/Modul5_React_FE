// let a = [1, 3, 5, 2, 6, 8];

// let b = new Array(3)
// console.log(b[0]);
// for (let index in a) {
//
// }
//
// for (let item of a) {
//
// }

// Duyệt mảng
// a.forEach((item2, index2) => {
//     console.log(index2,item2)
//     item2 = item2 * 2;
// })

// Map <=> th:each trong thymeleaf
let b = a.map((item) => {
    return item * 2;
});

// let b = a.map((item, index) => {
//     if (index % 2 === 0) return item
//     else return item * 2
// });

// let b = a.map((e, i) => {
//     if (i % 2 !== 0) {
//         return e * 2;
//     }
//     return e;
// });

// filter
// let b = a.filter((item, index) => index %2 !== 0);

// reduce: tích lũy giá trị qua các vòng lặp
// Tính tổng, tìm giá trị lớn nhất, nhỏ nhất, tổng tiền,...
// Thuật toán tìm phần tử lớn nhất trong mảng
// 2 1 0 4 5
let a = [1, 3, 5, 2, 6, 8];

// let max = a[0];
// for (let i = 1; i < a.length; i++) {
//     if(max < a[i]) {
//         max = a[i];
//     }
// }
// console.log(max)

// let max = a.reduce((max, item) => {
//     if (max < item) {
//         return item;
//     }
//     return max;
// })
// console.log(max)

let max = a.reduce((max, item) => max < item ? item : max)
console.log(max);

// console.log(a);
// console.log(b);

