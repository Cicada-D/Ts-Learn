// const requset = (str: string, num: number): string => str.requset(num);
// const repeat = (str: string, times: number): string => str.repeat(times);
// type Person = { name: string };
// //这里的({name})中的()是必须要存在的， 因为{}会被认为是一个函数体，如果没有()返回值会被识别为name而不是对象{name},与前面的返回值Person不一样
// const people = ["alice", "bob", "jan"].map((name): Person => ({ name }));
// let myFunc: (a: number, b?: number) => number;
// myFunc = function (x, y) {
//   if (y === undefined) {
//     return x;
//   }
//   return x + y;
// };
// function reverse(str: string): string;
// function reverse(any: any[]): any[];
// function reverse(stringOrArry: string | any[]): string | any[] {
//   if (typeof stringOrArry === "string") {
//     return stringOrArry.split("").reverse().join("");
//   } else return stringOrArry.slice().reverse();
// }
// function add(x: number, y: number): number;
// function add(x: any[], y: any[]): any[];
// function add(x: number | any[], y: number | any[]): number | any[] {
//   if (typeof x === "number" && typeof y === "number") {
//     return x + y;
//   } else if (Array.isArray(x) && Array.isArray(y)) {
//     return [...x, ...y];
//   }
//   throw new Error("wrong parameters");
// }
// type Person1 = { x:number, y?:number };  
// const people1:Person1 = {
//     x: 1,
//     y: undefined
// }
// type B = {
//     x: number,
//     y: number
// }
// const b: B = {x: 1, y: 2}
// const a: {x: number} = b
// console.log(a)
// interface Person {
//     firstName: string;
//     lastName: string;
//     age: number
// }
var A = /** @class */ (function () {
    function A() {
    }
    return A;
}());
