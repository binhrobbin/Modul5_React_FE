function arrToObj2(arr) {
    let obj = {};
    arr.forEach(([key,value])=>{
         obj[key] = value
        return obj
    })
    return obj
}

function arrToObj(arr) {
    let obj = {};
    let objx = arr.reduce((obj,[key,value])=>{
        obj[key] = value
        console.log(obj)
        return obj
    })
    return objx
}

const obj1 = arrToObj([
    ['name', 'Son Dang'],
    ['age', 21],
    ['address', 'Ha Noi']
])
console.log(obj1)

// let a = [1,2,3]
// let c = a.reduce((sum,item) =>{
//     console.log(sum)
//     return  sum+ item
// })
// console.log("Bài 2: "+c)