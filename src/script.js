//====== Higher Order Functions (HOF)======//
// There are many different uses of HOF

// Callbacks
// 1- HOF as a function executer
function executor(a, b, callback) {
    return callback(a, b);
}

function multiply(a, b) {
    return a * b;
}

function concatenateStrings(a, b) {
    return `${a} ${b}`;
}

console.log(executor(5, 34, multiply));
console.log(executor('Hello my name', 'is Alex!', concatenateStrings));


// 2- HOF as a Function Factory
function add(x) {
    return function(y) {
        return x + y;
    }
}

let add500 = add(500);
let add20 = add(20);

console.log(add500(400));
console.log(add20(400));

// 3- HOF as an object enhancer (injecting new properties)
// This is simiar to Higher Order Components in React!
// Functions here = Components
// Objects here = JSX Elements

