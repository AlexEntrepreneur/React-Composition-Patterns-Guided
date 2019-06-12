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
console.log(executor('Hello my name is', 'Alex', concatenateStrings));

// 2- HOF as a Function Factory
function add(x) {
  return function(y) {
    return x + y
  }
}

// We can create custom add functions
let add2 = add(2);
let add3 = add(3);

function greaterThan(n) {
  return m => m > n;
}

let greaterThan10 = greaterThan(10);
let greaterThan20 = greaterThan(20);

console.log(add2(4));
console.log(add3(6));
console.log(greaterThan10(11));
console.log(greaterThan20(11));



// 3- HOF as an object enhancer (injecting new properties)
// This is simiar to Higher Order Components in React!
// Functions here = Components
// Objects here = JSX Elements
function enhancer(component) {
  return function() {
    const boring = component();
    boring.name = 'Enhanced!'
    boring.newProp = 'Nice!';
    boring.injectedProp = 'It works!';
    return boring;
  }
}

function boringObject() {
  return {
    name: 'Boring',
    age: 32
  }
}

const enhancedObject = enhancer(boringObject);

console.log(boringObject());
console.log(enhancedObject());
