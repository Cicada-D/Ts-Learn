// enum Operator {
//     ADD,
//     DIV,
//     MUL,
//     SUB
// }

// console.log(Operator.ADD)
// console.log(Operator[0])
// console.log(typeof Operator)

// function compute(
//     op: Operator,
//     a: number,
//     b: number
// ) {
//     switch(op) {
//         case Operator.ADD:
//             return a + b
//         case Operator.DIV:
//             return a / b
//         case Operator.MUL:
//             return a * b
//         case Operator.SUB:
//             return a - b
//         default:
//             throw new Error('wrong operator')
//     }
// }

// compute(Operator.ADD, 1, 3)

// enum Permission {
//   UserRead = 1 << 8,
//   UserWrite = 1 << 7,
//   UserExecute = 1 << 6,
//   GroupRead = 1 << 5,
//   GroupWrite = 1 << 4,
//   GroupExecute = 1 << 3,
//   AllRead = 1 << 2,
//   AllWrite = 1 << 1,
//   AllExecute = 1 << 0,
// }

// type foo = {
//     red: Number
//     green: Number
// }

// type fooTwo = number[]

// interface Foo {
//     red: string
// }
// interface Foo {
//     green: string
// }

// interface Foo {
//     blue: (a: number) => number,
//     yellow:(name: string) => string
// }

// type fooOne = (a: number) => number 

// class FooOne implements Foo {
//     red: string = 'red';
//     green: string = 'green';
//     yellow(name: string) {
//         return name
//     }
//     blue(a: number) {
//         return a
//     }
//     getYellow: fooOne = (a: number) => {
//         return a
//     }
// }

// const fooone = new FooOne();


const n = 1

const m: string = n as unknown as string

const M = <string><unknown>n