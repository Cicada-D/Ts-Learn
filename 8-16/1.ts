const arr1: number[] = [1, 2, 3];

console.log(arr1)

let arr2:Array<number> = [1, 2, 3];

console.log(arr2)

type MyNumber = [
    number,
    number,
    number?,
    string?
]

let arr3: MyNumber = [1, 2]

console.log(arr3)

type Color = [
    red: number,
    greenL: number,
    blue: number
]

const black: Color = [255, 255, 255]
console.log(black)


type t1 = readonly [number, number]; //只读元组
type t2 = [number, number]; //元组
// 只读元组是元组的父类型 元组可以被赋给只读元组， 而只读元组不能被赋给元组 
// let x:t2 = [1, 2]; 
// let y:t1 = x; // 正确
// // x = y; // 报错

let x:t1 = [1, 2];
let y:t1 = x; // 报错


