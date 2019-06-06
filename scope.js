function outer() {
    var b = 10;
    function inner() {

        var a = 20;
        console.log(a + b);
        console.log('Inside inner function, a+b = ' + (a+b))
    }
    console.log('Inside outer function, b = ' + b)
    return inner();
}
var X = outer(); //outer() invoked the first time
console.log(X)

var Y = outer(); //outer() invoked the second time
console.log(Y)
