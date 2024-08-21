// interface A {
//   a: number;
// }

// interface B extends A {
//   b: number;
// }

interface MotorVehicle {
  x: number;
}
interface Flyable {
  y: number;
}
interface Swimmable {
  z: number;
}

interface SuperCar extends MotorVehicle, Flyable, Swimmable {
  n: string;
  m: boolean;
}

class SecretCar implements SuperCar {
    x = 1
    y = 1
    z = 1
    n = 'foo'
    m = true
    set Sfoo(num: number) {
        this.x = num
    }
    get gFoo(): number {
        return this.x
    }
}
