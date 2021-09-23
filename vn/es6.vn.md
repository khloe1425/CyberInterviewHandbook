# ES6 Interview Questions

|No| Questions                                                                         |
|-----|-----------------------------------------------------------------------------------|
| 01.|[When to use reduce(), map(), foreach() and filter() in JavaScript?](#when-to-use-reduce-map-foreach-and-filter-in-javascript)|
| 02.|[How do you clone an object in JavaScript?](#how-do-you-clone-an-object-in-javascript)|
| 03.|[What is a promise?](#what-is-a-promise)|
| 04.|[What are the differences between variables created using let, var or const?](#what-are-the-differences-between-variables-created-using-let-var-or-const)|
| 05.|[Can you give an example for destructuring an object or an array?](#can-you-give-an-example-for-destructuring-an-object-or-an-array)|
| 06.|[How does await and async works in es6?](#how-does-await-and-async-works-in-es6)|
| 07.|[What are the benefits of using arrow function over es5 function?](#what-are-the-benefits-of-using-arrow-function-over-es5-function)|
| 08.|[What are the differences between ES6 class and ES5 function constructors?](#what-are-the-differences-between-es6-class-and-es5-function-constructors)|
| 09.|[What are the benefits of using spread syntax and how is it different from rest syntax?](#what-are-the-benefits-of-using-spread-syntax-and-how-is-it-different-from-rest-syntax)|
| 10.|[What is the difference between for..in and for..of?](#what-is-the-difference-between-forin-and-forof)|
| 11.|[What is the Temporal Dead Zone in ES6?](#what-is-the-temporal-dead-zone-in-es6)|
| 12.|[What is modules in ES6?](#what-is-modules-in-es6)|
| 13.|[Can you describe the main difference between a .forEach loop and a .map() loop and why you would pick one versus the other?](#can-you-describe-the-main-difference-between-a-foreach-loop-and-a-map-loop-and-why-you-would-pick-one-versus-the-other)|
| 14.|[What happens if you do not use rest parameter as a last argument?](#what-happens-if-you-do-not-use-rest-parameter-as-a-last-argument)| 

### When to use reduce(), map(), foreach() and filter() in JavaScript?

1. **forEach()**

It takes a callback function and run that callback function on each element of array one by one.

Basically forEach works as a traditional for loop looping over the array and providing array elements to do operations on them.
```javascript
var arr = [10, 20, 30];

arr.forEach(function (elem, index){
   console.log(elem + ' comes at ' + index);
})

```
**Output**
```
10 comes at 0
20 comes at 1
30 comes at 2

```
2. **filter()**

The main difference between forEach() and filter() is that forEach just loop over the array and executes the callback but filter executes the callback and check its return value. If the value is true element remains in the resulting array but if the return value is false the element will be removed for the resulting array.
_
Note: filter does not update the existing array it will return a new filtered array every time._
```javascript
var arr = [10, 20, 30]; 

var result = arr.filter(function(elem){
    return elem !== 20;
})
console.log(result)

```
**Output**

```
[10, 30]
```
3. **map()**

map() like filter() & forEach() takes a callback and run it against every element on the array but whats makes it unique is it generate a new array based on your existing array.

Like filter(), map() also returns an array. The provided callback to map modifies the array elements and save them into the new array upon completion that array get returned as the mapped array.
```javascript
var arr = [10, 20, 30];

var mapped = arr.map(function(elem) {
    return elem * 10;
});
console.log(mapped)

```
**Output**

```
[100, 200, 300]
```
4. **reduce()**

reduce() method of the array object is used to reduce the array to one single value.
```javascript
var arr = [10, 20, 30];

var sum = arr.reduce(function(sum, elem) {
    return sum + elem;
});
console.log(sum); // Output: 60

```
<div align="right">
    <b><a href="#es6-interview-questions">↥ back to top</a></b>
</div>

### How do you clone an object in JavaScript?
Using the object spread operator ..., the object own enumerable properties can be copied into the new object. This creates a shallow clone of the object.
```javascript
const obj = { a: 1, b: 2 }
const shallowClone = { ...obj }

```
<div align="right">
    <b><a href="#es6-interview-questions">↥ back to top</a></b>
</div>

### What is a promise?
A promise is an object that may produce a single value some time in the future with either a resolved value or a reason that it’s not resolved(for example, network error). It will be in one of the 3 possible states: fulfilled, rejected, or pending. 
**Syntax**

```javascript
const promise = new Promise(function(resolve, reject) {
  // promise description
})

```
Promises are used to handle asynchronous operations. They provide an alternative approach for callbacks by reducing the callback hell and writing the cleaner code.
Promises have three states:
1. **Pending**: This is an initial state of the Promise before an operation begins
2. **Fulfilled**: This state indicates that specified operation was completed.
3. **Rejected**: This state indicates that the operation did not complete. In this case an error value will be thrown.

<div align="right">
    <b><a href="#es6-interview-questions">↥ back to top</a></b>
</div>

### What are the differences between variables created using let, var or const?
Variables declared using the var keyword are scoped to the function in which they are created, or if created outside of any function, to the global object. let and const are block scoped, meaning they are only accessible within the nearest set of curly braces (function, if-else block, or for-loop).
```javascript
function foo() {
  // All variables are accessible within functions.
  var bar = 'bar';
  let baz = 'baz';
  const qux = 'qux';

  console.log(bar); // bar
  console.log(baz); // baz
  console.log(qux); // qux
}

console.log(bar); // ReferenceError: bar is not defined
console.log(baz); // ReferenceError: baz is not defined
console.log(qux); // ReferenceError: qux is not defined

```
```javascript
if (true) {
  var bar = 'bar';
  let baz = 'baz';
  const qux = 'qux';
}

// var declared variables are accessible anywhere in the function scope.
console.log(bar); // bar
// let and const defined variables are not accessible outside of the block they were defined in.
console.log(baz); // ReferenceError: baz is not defined
console.log(qux); // ReferenceError: qux is not defined

```

var allows variables to be hoisted, meaning they can be referenced in code before they are declared. let and const will not allow this, instead throwing an error.
```javascript
console.log(foo); // undefined

var foo = 'foo';
console.log(baz); // ReferenceError: can't access lexical declaration 'baz' before initialization

let baz = 'baz';
console.log(bar); // ReferenceError: can't access lexical declaration 'bar' before initialization

const bar = 'bar';

```
Redeclaring a variable with var will not throw an error, but 'let' and 'const' will.
```javascript
var foo = 'foo';
var foo = 'bar';
console.log(foo); // "bar"

let baz = 'baz';
let baz = 'qux'; // Uncaught SyntaxError: Identifier 'baz' has already been declared

```
**let** and **const** differ in that **let** allows reassigning the variable's value while **const** does not.
```javascript
// This is fine.
let foo = 'foo';
foo = 'bar';

// This causes an exception.
const baz = 'baz';
baz = 'qux';

```
<div align="right">
    <b><a href="#es6-interview-questions">↥ back to top</a></b>
</div>

### Can you give an example for destructuring an object or an array?
Destructuring is an expression available in ES6 which enables a succinct and convenient way to extract values of Objects or Arrays and place them into distinct variables.
**Array Destructuring**
```javascript
// Variable assignment.
const foo = ['one', 'two', 'three'];
const [one, two, three] = foo;

console.log(one); // "one"
console.log(two); // "two"
console.log(three); // "three"

```
```javascript
// Swapping variables
let a = 1;
let b = 3;

[a, b] = [b, a];
console.log(a); // 3
console.log(b); // 1

```
**Object Destructuring**
```javascript
// Variable assignment.
const o = { p: 42, q: true };
const { p, q } = o;

console.log(p); // 42
console.log(q); // true

```
<div align="right">
    <b><a href="#es6-interview-questions">↥ back to top</a></b>
</div>

### How does await and async works in es6?
**Promises**
```javascript
const delay = seconds => {
    return new Promise(resolve => {
        setTimeout(resolve, seconds * 1000)
    });
};

console.log("Zero seconds wait");
delay(1).then(() => console.log('One seconds wait'));
delay(5).then(() => console.log('Five seconds wait'));

```
**Loading data with fetch()**
```javascript
const getPeopleInSpace = () =>
    fetch('http://api.open-notify.org/astros.json')
        .then(res => res.json());

getPeopleInSpace()
    .then(console.log);

```
**Async() and await()**
```javascript
const delay = seconds => {
    return new Promise(
        resolve => setTimeout(resolve, seconds * 1000)
    )
};

const countToFive = async() => {
    console.log('zero seconds wait');
    await delay(2);
    console.log('Two seconds wait');
    await delay(5);
    console.log('Five seconds wait');
}

countToFive();

```
**Async with fetch**
```javascript
const githubRequest = async(loginName) => {
    try{
        var response = await fetch(`http://api.github.com/users/${loginName}/followers`);
        var json = await response.json();
        var followerList = json.map(user => user.login);
        console.log(followerList);
    } catch(e){
        console.log("Data didn't load", e);
    }
};

//githubRequest('eveporcello');
githubRequest('pradeepkumar2');

```
<div align="right">
    <b><a href="#es6-interview-questions">↥ back to top</a></b>
</div>

### What are the benefits of using arrow function over es5 function?
**Arrow functions**
Arrows is a new syntax for functions, which brings several benefits:

* Arrow syntax automatically binds this to the surrounding code’s context
* The syntax allows an implicit return when there is no body block, resulting in shorter and simpler code in some cases
* Last but not least, => is shorter and simpler than function, although stylistic issues are often subjective
```javascript
//arrow function with no parameters
var a1 = () => 1;
 
//arrow with one parameter can be defined without parentheses
var a2 = x => 1;
var a3 = (x) => 1;
 
//arrow with multiple params requires parentheses
var a4 = (x, y) => 1;
 
//arrow with body has no implicit return
var a5 = x => { return 1; };

```
<div align="right">
    <b><a href="#es6-interview-questions">↥ back to top</a></b>
</div>

### What are the differences between ES6 class and ES5 function constructors?
```javascript
// ES5 Function Constructor
function Person(name) {
  this.name = name;
}

// ES6 Class
class Person {
  constructor(name) {
    this.name = name;
  }
}

```
For simple constructors, they look pretty similar.

The main difference in the constructor comes when using inheritance. If we want to create a **Student** class that subclasses **Person** and add a **studentId** field, this is what we have to do in addition to the above.
```javascript
// ES5 Function Constructor
function Student(name, studentId) {
  // Call constructor of superclass to initialize superclass-derived members.
  Person.call(this, name);

  // Initialize subclass's own members.
  this.studentId = studentId;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

// ES6 Class
class Student extends Person {
  constructor(name, studentId) {
    super(name);
    this.studentId = studentId;
  }
}

```
It's much more verbose to use inheritance in ES5 and the ES6 version is easier to understand and remember.
<div align="right">
    <b><a href="#es6-interview-questions">↥ back to top</a></b>
</div>

### What are the benefits of using spread syntax and how is it different from rest syntax?
ES6's spread syntax is very useful when coding in a functional paradigm as we can easily create copies of arrays or objects without resorting to Object.create, slice, or a library function. This language feature is used often in Redux and Rx.js projects.
```javascript
function addCookiesInArray(arr) {
  return [...arr, 'Cookies'];
}

const result = addCookiesInArray(['I', 'really', "don't", 'like']); 

console.log(result); // ["I", "really", "don't", "like", "Cookies"]

```
```javascript
const person = {
  name: 'Todd',
  age: 29,
};

const copyOfPerson = { ...person };

console.log(copyOfPerson); // {name: "Todd", age: 29}

```
ES6's rest syntax offers a shorthand for including an arbitrary number of arguments to be passed to a function. It is like an inverse of the spread syntax, taking data and stuffing it into an array rather than unpacking an array of data, and it works in function arguments, as well as in array and object destructuring assignments.
```javascript
function addFiveToABunchOfNumbers(...numbers) {
  return numbers.map(x => x + 5);
}

const result = addFiveToABunchOfNumbers(4, 5, 6, 7, 8, 9, 10); // [9, 10, 11, 12, 13, 14, 15]

const [a, b, ...rest] = [1, 2, 3, 4]; // a: 1, b: 2, rest: [3, 4]

const { e, f, ...others } = {
  e: 1,
  f: 2,
  g: 3,
  h: 4,
}; // e: 1, f: 2, others: { g: 3, h: 4 }

```
<div align="right">
    <b><a href="#es6-interview-questions">↥ back to top</a></b>
</div>

### What is the difference between for..in and for..of?
* for in: loops over enumerable property names of an object.
* for of: (new in ES6) does use an object-specific iterator and loops over the values generated by that.

Both **for..of** and **for..in** statements iterate over lists; the values iterated on are different though, **for..in** returns a list of keys on the object being iterated, whereas **for..of** returns a list of values of the numeric properties of the object being iterated.

Example:
```javascript
let list = [4, 5, 6];

for (let i in list) {
   console.log(i); // "0", "1", "2",
}

for (let i of list) {
   console.log(i); // "4", "5", "6"
}

```
<div align="right">
    <b><a href="#es6-interview-questions">↥ back to top</a></b>
</div>

### What is the Temporal Dead Zone in ES6?
In ES6, let bindings are not subject to Variable Hoisting, which means that let declarations do not move to the top of the current execution context. Referencing the variable in the block before the initialization results in a ReferenceError (contrary to a variable declared with var, which will just have the undefined value). The variable is in a “temporal dead zone” from the start of the block until the initialization is processed.
```javascript
console.log(aVar); // undefined
console.log(aLet); // causes ReferenceError: aLet is not defined
var aVar = 1;
let aLet = 2;

```
<div align="right">
    <b><a href="#es6-interview-questions">↥ back to top</a></b>
</div>

### What is modules in ES6?
To make objects, functions, classes or variables available to the outside world it’s as simple as exporting them and then importing them where needed in other files.

**Benefits**

* Code can be split into smaller files of self-contained functionality.
* The same modules can be shared across any number of applications.
* Ideally, modules need never be examined by another developer, because they’ve has been proven to work.
* Code referencing a module understands it’s a dependency. If the module file is changed or moved, the problem is immediately obvious.
* Module code (usually) helps eradicate naming conflicts. Function x() in module1 cannot clash with function x() in module2. Options such as namespacing are employed so calls become module1.x() and module2.x().
**Exporting**
```javascript
export const myNumbers = [1, 2, 3, 4];
const animals = ['Panda', 'Bear', 'Eagle']; // Not available directly outside the module

export function myLogger() {
  console.log(myNumbers, animals);
}

export class Alligator {
   constructor() {
     // ...
   }
}

```
**Exporting with alias**
```javascript
export { myNumbers, myLogger as Logger, Alligator }

```
**Default export**
```javascript
export const myNumbers = [1, 2, 3, 4];
const animals = ['Panda', 'Bear', 'Eagle'];

export default function myLogger() {
  console.log(myNumbers, pets);
}

export class Alligator {
  constructor() {
    // ...
  }
}

```
<div align="right">
    <b><a href="#es6-interview-questions">↥ back to top</a></b>
</div>

### Can you describe the main difference between a .forEach loop and a .map() loop and why you would pick one versus the other?
To understand the differences between the two, Let us look at what each function does.

**forEach**

* Iterates through the elements in an array.
* Executes a callback for each element.
* Does not return a value.
```javascript
const a = [1, 2, 3];
const doubled = a.forEach((num, index) => {
  // Do something with num and/or index.
});

// doubled = undefined

```
**map**

* Iterates through the elements in an array.
* "Maps" each element to a new element by calling the function on each element, creating a new array as a result.
```javascript
const a = [1, 2, 3];
const doubled = a.map(num => {
  return num * 2;
});

// doubled = [2, 4, 6]

```
The main difference between **.forEach** and **.map()** is that **.map()** returns a new array. If you need the result, but do not wish to mutate the original array, **.map()** is the clear choice. If you simply need to iterate over an array, **forEach** is a fine choice.
<div align="right">
    <b><a href="#es6-interview-questions">↥ back to top</a></b>
</div>

### What happens if you do not use rest parameter as a last argument?
The rest parameter should be the last argument, as its job is to collect all the remaining arguments into an array. For example, if you define a function like below it does not make any sense and will throw an error.

```javascript
function someFunc(a,…b,c) {
  //You code goes here
  return;
}
```
<div align="right">
    <b><a href="#es6-interview-questions">↥ back to top</a></b>
</div>
