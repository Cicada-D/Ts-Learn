function hello1(text: string): void {
  console.log("hello " + text);
}

const hello2 = function (text: string): void {
  console.log("hello " + text);
};

const hello3: (text: string) => void = function (text) {
  console.log("hello " + text);
};

type MyFunc = (text: string) => void;

function add(x: number): number {
  return x
}

const myAdd: typeof add = function (x: number):number {
  return x;
};

function add(x: number, y: number) {
  return x + y;
}

const myAdd: typeof add = function (x, y) {
  return x + y;
};
