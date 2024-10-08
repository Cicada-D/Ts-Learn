// function getFirst<T>(arr: T[]): T {
//   return arr[0];
// }

// getFirst<number>([1, 2, 3]);

// type Nullable<T> = T | undefined | null

// type Container<T> = {value: T}

// const a: Container<number> = { value: 0}
// const b: Container<String> = { value: 'foo'}

// type Tree<T> = {
//     value: T;
//     left: Tree<T> | null;
//     right: Tree<T> | null
// }

// const treeOne: Tree<number> = {
//     value: 1,
//     left: null,
//     right: {
//         value: 2,
//         left: null,
//         right: null
//     }
// }

// // 类型参数的默认值
// function getFirst<T = string>(arr: T[]): T {
//   return arr[0];
// }
// getFirst([1, 2, 3]); // 正确

// // 数组的泛型表示
// let arr: Array<number> = [1, 2, 3];

// 类型参数的约束条件
// function comp<Type>(a: Type, b: Type) {
//   if (a.length >= b.length) {
//     return a;
//   }
//   return b;
// } // 上面示例中，类型参数 Type 有一个隐藏的约束条件：它必须存在length属性。如果不满足这个条件，就会报错。

function comp<T extends { length: number }>(a: T, b: T) {
  if (a.length >= b.length) {
    return a;
  }
  return b;
}

// 类型参数的约束条件采用下面的形式。

// <TypeParameter extends ConstraintType>
