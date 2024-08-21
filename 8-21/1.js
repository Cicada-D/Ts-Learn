// enum Operator {
//     ADD,
//     DIV,
//     MUL,
//     SUB
// }
var FooOne = /** @class */ (function () {
    function FooOne() {
        this.red = 'red';
        this.green = 'green';
        this.getYellow = function (a) {
            return a;
        };
    }
    FooOne.prototype.yellow = function (name) {
        return name;
    };
    FooOne.prototype.blue = function (a) {
        return a;
    };
    return FooOne;
}());
var fooone = new FooOne();
