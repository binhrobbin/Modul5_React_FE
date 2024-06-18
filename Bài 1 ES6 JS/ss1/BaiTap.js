//Bài 1 Tạo một mảng mới chứa các số lớn hơn 5 từ mảng ban đầu.
let a = [0,1,2,3,4,5]
console.log("Mảng a ban đầu: "+a)
let b = a.map(item =>  item+5);
console.log("Bài 1: "+b)

//Bài 2 Sử dụng arrow function và reduce để tính tổng các phần tử trong mảng.
let c = a.reduce((sum,item) => sum + item)
console.log("Bài 2: "+c)

//Bài 3 Kiểm tra 1 mảng có chứa số V hay không nếu có trả về V không thì trả về "không tìm thấy".
let d = (v,array) => {
    let check = false;
    array.forEach(element => {
        if (element === v) check = true;
    })
    if (check === false) return "không tìm thấy";
    return v;
}
console.log("Bài 3: "+d(6,a))

//Bài 4 Kiểm tra 1 mảng tất cả các phần tử trong mảng đó có lớn hơn 0 hay không?.
let e = arr => {
    let check = true;
    arr.forEach(item =>{
        if (item<=0) return check = false;
    })
    if (check === false) return "không"
    return "có"
}
console.log("Bài 4: "+e(a))

//Bài 5 Tìm phần tử đầu tiên trong mảng lớn hơn 3.
// let a = [0,1,2,3,4,5]
// a.forEach((item,index) =>{
//     if (item>3) {
//         console.log("Bài 5: Phần tử thứ "+index)
//         return;
//     }
// })
for (const eKey in a) {
    if (a[eKey]>3){
        console.log("Bài 5: Phần tử thứ "+eKey)
        break;
    }
}
// let a = [0,1,2,3,4,5]
//Bài 6: Sử dụng destructuring với rest parameter để trích xuất phần tử đầu tiên vào biến "first" và các phần tử còn lại vào một mảng mới "rest".
let [first,...rest] = a;
console.log("Bài 6:");
console.log(first)
console.log(rest)

//Bài 7: Sử dụng destructuring để trích xuất các giá trị "name" và "age" từ một mảng chứa các đối tượng "person".
let person = {
    name: "Bình",
    age: 12
}
let {name,age} = person;
console.log("Bài 7:");
console.log(name);
console.log(age);

//Bài 8: Sử dụng Rest parameter và Spread operator để tạo một hàm nhận vào danh sách các số và trả về tổng của chúng.
let sum = (...numbers) => {
    return  numbers.reduce((total,item) => total+item)
}
console.log("Bài 8: "+sum(1,2,3))

//Bài 9: Sử dụng Rest parameter để nhận vào một danh sách tên và trả về chuỗi định dạng "Welcome, [tên1], [tên2], [tên3], ..." cho tất cả các tên.
let print = (chao,...ten) =>{
    ten.forEach(item=> console.log(chao+item))
}
let print2 = (chao,...ten) =>{
    return ten.map(item => chao+item+"!")
}
console.log("Bài 9: ")
print("xin chào ","An","Bình","Trang","Hoa")
console.log( print2("Chào ","An","Bình","Trang","Hoa"))

// Bài 10. Tạo một đối tượng "book" với thuộc tính "title", "author" và "pages" bằng cách sử dụng Enhanced object literals.
// Đối tượng "book" cũng có phương thức "displayInfo" để in ra thông tin về sách.
let pages = 225;
let author = "Paulo";
let book = {
    title: "Nhà giả kim",
    author: author,
    pages,
    displayInfo(){
        console.log(book);
    }
}
console.log("Bài 10: ")
book.displayInfo();
