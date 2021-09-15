<h1 align="center">Interview Handbook</h1>
<div align="center">
  <a href="#">
    <img src="./images/Handbook.webp" alt="Interview Handbook" width="400">
  </a>
</div>
<hr/>

## Table of Contents
* [JS Interview Questions](#js-interview-questions)
* [ES6 Interview Questions](#es6-interview-questions)

## JS Interview Questions

|No| Questions                                                                         |
|-----|-----------------------------------------------------------------------------------|
| 01.|[What is difference between document.getElementById() and document.querySelector()?](#what-is-difference-between-documentgetelementbyid-and-documentqueryselector)|
| 02.|[What is Hoisting in JavaScript?](#what-is-hoisting-in-javascript)|
| 03.|[What are closures?](#what-are-closures)|
| 04.|[What is an event flow?](#what-is-an-event-flow)|
| 05.|[What is event bubbling?](#what-is-event-bubbling)|
| 06.|[What is event capturing?](#what-is-event-capturing)|
| 07.|[What is the difference between == and === operators?](#what-is-the-difference-between--and--operators)|
| 08.|[What is a callback function?](#what-is-a-callback-function)|
| 09.|[What is a callback hell?](#what-is-a-callback-hell)|
| 10.|[What is a strict mode in javascript?](#what-is-a-strict-mode-in-javascript)|
| 11.|[What is typeof operator?](#what-is-typeof-operator)|
| 12.|[What is the difference between null and undefined?](#what-is-the-difference-between-null-and-undefined)|
| 13.|[What is the difference between window and document?](#what-is-the-difference-between-window-and-document)|
| 14.|[What is the difference between an attribute and a property?](#what-is-the-difference-between-an-attribute-and-a-property)|
| 15.|[What is the use of preventDefault method?](#what-is-the-use-of-preventdefault-method)|
| 16.|[What is the purpose JSON stringify?](#what-is-the-purpose-json-stringify)|
| 17.|[How do you parse JSON string?](#how-do-you-parse-json-string)|
| 18.|[How do you check whether a string contains a substring?](#how-do-you-check-whether-a-string-contains-a-substring)|
| 19.|[What are the benefits of keeping declarations at the top?](#what-are-the-benefits-of-keeping-declarations-at-the-top)|
| 20.|[What is a RegExp object?](#what-is-a-regexp-object)|
| 21.|[What is an anonymous function?](#what-is-an-anonymous-function)|
| 22.|[How do you sort elements in an array?](#how-do-you-sort-elements-in-an-array)|
| 23.|[How do you find min and max value in an array?](#how-do-you-find-min-and-max-value-in-an-array)|
| 24.|[How do you find min and max values without Math functions?](#how-do-you-find-min-and-max-values-without-math-functions)|
| 25.|[Explain the difference between synchronous and asynchronous functions?](#explain-the-difference-between-synchronous-and-asynchronous-functions)|
| 26.|[What is event loop? What is the difference between call stack and task queue?](#what-is-event-loop-what-is-the-difference-between-call-stack-and-task-queue)|
| 27.|[What is the difference between slice and splice?](#what-is-the-difference-between-slice-and-splice)|


### What is difference between document.getElementById() and document.querySelector()?

* **document.getElementById()**

Returns an element object representing the element whose id property matches the specified string. Since element IDs are required to be unique if specified, they're a useful way to get access to a specific element quickly.

```javascript
element = document.getElementById(id);
```
* **document.querySelector()**

Returns the first matching Element node within the node's subtree. If no matching node is found, null is returned.

```javascript
element = document.querySelector(selectors);
```
* **document.querySelectorAll()**

Returns a NodeList containing all matching Element nodes within the node's subtree, or an empty NodeList if no matches are found.

```javascript
element = document.querySelectorAll(selectors);
```
Note: querySelector() is more useful when we want to use more complex selectors.

<div align="right">
    <b><a href="#js-interview-questions">↥ back to top</a></b>
</div>

### What is Hoisting in JavaScript?

Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.

**Example 01: Variable Hoisting**

```javascript
console.log(message); // output : undefined
var message = "The variable Has been hoisted";
```
The above code looks like as below to the interpreter,

```javascript
var message;
console.log(message);
message = "The variable Has been hoisted";
```
Example 02: Function Hoisting

```javascript
function hoist() {
  a = 20;
  var b = 100;
}

hoist();

console.log(a);
/* 
Accessible as a global variable outside hoist() function
Output: 20
*/

console.log(b);
/*
Since it was declared, it is confined to the hoist() function scope.
We can't print it out outside the confines of the hoist() function.
Output: ReferenceError: b is not defined
*/

```
<div align="right">
    <b><a href="#js-interview-questions">↥ back to top</a></b>
</div>

### What are closures?
A closure is the combination of a function and the lexical environment within which that function was declared. i.e, It is an inner function that has access to the outer or enclosing function’s variables. The closure has three scope chains
* Own scope where variables defined between its curly brackets
* Outer function’s variables
* Global variables
```javascript
function Welcome(name) {
  var greetingInfo = function(message) {
    console.log(message+' '+name);
  }
  return greetingInfo;
}
var myFunction = Welcome('John');
myFunction('Welcome '); // Output: Welcome John
myFunction('Hello Mr.'); // output: Hello Mr.John

```
As per the above code, the inner function greetingInfo() has access to the variables in the outer function Welcome() even after outer function has returned.
<div align="right">
    <b><a href="#js-interview-questions">↥ back to top</a></b>
</div>

### What is an event flow?
Event flow is the order in which event is received on the web page. When you click an element that is nested in various other elements, before your click actually reaches its destination, or target element, it must trigger the click event each of its parent elements first, starting at the top with the global window object.

There are two ways of event flow

* Top to Bottom(Event Capturing)
* Bottom to Top (Event Bubbling)

<div align="right">
    <b><a href="#js-interview-questions">↥ back to top</a></b>
</div>

### What is event bubbling?
Event bubbling is a type of event propagation where the event first triggers on the innermost target element, and then successively triggers on the ancestors (parents) of the target element in the same nesting hierarchy till it reaches the outermost DOM element.

Example: If you click on EM, the handler on DIV runs.
```javascript
<div onclick="alert('The handler!')">
  <em>If you click on <code>EM</code>, the handler on <code>DIV</code> runs.</em>
</div>
```
**Stopping bubbling**

```javascript
<body onclick="alert(`the bubbling doesn\'t reach here`)">
  <button onclick="event.stopPropagation()">Click me</button>
</body>

```
<div align="right">
    <b><a href="#js-interview-questions">↥ back to top</a></b>
</div>

### What is event capturing?
Event capturing is a type of event propagation where the event is first captured by the outermost element and then successively triggers on the descendants (children) of the target element in the same nesting hierarchy till it reaches the inner DOM element.
<div align="right">
    <b><a href="#js-interview-questions">↥ back to top</a></b>
</div>

### What is the difference between == and === operators?
JavaScript provides both strict(===, !==) and type-converting(==, !=) equality comparison. The strict operators takes type of variable in consideration, while non-strict operators make type correction/conversion based upon values of variables.
Examples
```javascript
1 == "1"     // true
1 === "1"    // false
```
<div align="right">
    <b><a href="#js-interview-questions">↥ back to top</a></b>
</div>

### What is a callback function?
A callback function is a function passed into another function as an argument. This function is invoked inside the outer function to complete an action.
```javascript
function callbackFunction(name) {
  console.log('Hello ' + name);
}

function outerFunction(callback) {
  let name = prompt('Please enter your name.');
  callback(name);
}

outerFunction(callbackFunction);

```

<div align="right">
    <b><a href="#js-interview-questions">↥ back to top</a></b>
</div>

### What is a callback hell?
Callback Hell is an anti-pattern with multiple nested callbacks which makes code hard to read and debug when dealing with asynchronous logic. The callback hell looks like below,
```javascript
async1(function() {
    async2(function() {
        async3(function() {
            async4(function() {
                ....
            });
        });
    });
});

```
<div align="right">
    <b><a href="#js-interview-questions">↥ back to top</a></b>
</div>

### What is a strict mode in javascript?
Strict Mode is a new feature in ECMAScript 5 that allows to place a program, or a function, in a strict operating context. This way it prevents certain actions from being taken and throws more exceptions. The literal expression 'use strict'; instructs the browser to use the javascript code in the Strict mode.

Strict mode is useful to write secure javaScript by notifying "bad syntax" into real errors. For example, it eliminates accidentally creating a global variable by throwing an error and also throws an error for assignment to a non-writable property, a getter-only property, a non-existing property, a non-existing variable, or a non-existing object.

The strict mode is declared by adding "use strict"; to the beginning of a script or a function. If declare at the beginning of a script, it has global scope.
```javascript
'use strict';
x = 3.14; // This will cause an error because x is not declared

```
and if you declare inside a function, it has local scope
```javascript
x = 3.14;       // This will not cause an error.
myFunction();

function myFunction() {
  'use strict';
  y = 3.14;   // This will cause an error
}

```
<div align="right">
    <b><a href="#js-interview-questions">↥ back to top</a></b>
</div>

### What is typeof operator?
You can use the JavaScript typeof operator to find the type of a JavaScript variable. It returns the type of a variable or an expression.
```javascript
typeof "John Abraham"     // Returns "string"
typeof (1 + 2)        // Returns "number"

```
<div align="right">
    <b><a href="#js-interview-questions">↥ back to top</a></b>
</div>

### What is the difference between null and undefined?
Below are the main differences between null and undefined,

Null | Undefined |
---------|----------|
 It is an assignment value which indicates that variable points to no object. | It is not an assignment value where a variable has been declared but has not yet been assigned a value.|
Type of null is object | Type of undefined is undefined |
 The null value is a primitive value that represents the null, empty, or non-existent reference. | The undefined value is a primitive value used when a variable has not been assigned a value. |
Indicates the absence of a value for a variable| Indicates absence of variable itself |
Converted to zero (0) while performing primitive operations| Converted to NaN while performing primitive operations|
<div align="right">
    <b><a href="#js-interview-questions">↥ back to top</a></b>
</div>

### What is the difference between window and document?
The window is the first thing that gets loaded into the browser. This window object has the majority of the properties like length, innerWidth, innerHeight, name, if it has been closed, its parents, and more.

The document object is html, aspx, php, or other document that will be loaded into the browser. The document actually gets loaded inside the window object and has properties available to it like title, URL, cookie, etc.


Window | Document
---------|----------
 It is the root level element in any web page |  It is the root level element in any web page |It is the direct child of the window object. This is also known as Document Object Model(DOM)  
 By default window object is available implicitly in the page | You can access it via window.document or document. 
 It has methods like alert(), confirm() and properties like document, location | It provides methods like getElementById(), getElementByTagName(), createElement() etc

 <div align="right">
    <b><a href="#js-interview-questions">↥ back to top</a></b>
</div>

### What is the difference between an attribute and a property?
Attributes are defined on the HTML markup whereas properties are defined on the DOM. For example, the below HTML element has 2 attributes type and value,
```javascript
<input type="text" value="Name:">
```
You can retrieve the attribute value as below,
```javascript
const input = document.querySelector('input');
console.log(input.getAttribute('value')); // Good morning
console.log(input.value); // Good morning

```
And after you change the value of the text field to "Good evening", it becomes like
```javascript
console.log(input.getAttribute('value')); // Good morning
console.log(input.value); // Good evening

```
<div align="right">
    <b><a href="#js-interview-questions">↥ back to top</a></b>
</div>

### What is the use of preventDefault method?
The preventDefault() method cancels the event if it is cancelable, meaning that the default action or behaviour that belongs to the event will not occur. For example, prevent form submission when clicking on submit button and prevent opening the page URL when clicking on hyper link are some common usecases.
```javascript
document.getElementById("link").addEventListener("click", function(event) {
   event.preventDefault();
});

```
Note: Remember that not all events are cancelable.
<div align="right">
    <b><a href="#js-interview-questions">↥ back to top</a></b>
</div>

### What is the purpose JSON stringify?
When sending data to a web server, the data has to be in a string format. You can achieve this by converting JSON object into a string using stringify() method.
```javascript
var userJSON = {'name': 'John', age: 31}
var userString = JSON.stringify(user);
console.log(userString); //"{"name":"John","age":31}"

```
<div align="right">
    <b><a href="#js-interview-questions">↥ back to top</a></b>
</div>

### How do you parse JSON string?
When receiving the data from a web server, the data is always in a string format. But you can convert this string value to javascript object using parse() method.
```javascript
var userString = '{"name":"John","age":31}';
var userJSON = JSON.parse(userString);
console.log(userJSON);// {name: "John", age: 31}
```
<div align="right">
    <b><a href="#js-interview-questions">↥ back to top</a></b>
</div>

### How do you check whether a string contains a substring?
There are 3 possible ways to check whether a string contains a substring or not,

1. Using includes: ES6 provided String.prototype.includes method to test a string contains a substring
```javascript
var mainString = "hello", subString = "hell";
mainString.includes(subString)

```
2. Using indexOf: In an ES5 or older environments, you can use String.prototype.indexOf which returns the index of a substring. If the index value is not equal to -1 then it means the substring exist in the main string.
```javascript
var mainString = "hello", subString = "hell";
mainString.indexOf(subString) !== -1

```
3. Using RegEx: The advanced solution is using Regular expression test method(RegExp.test), which allows for testing for against regular expressions
```javascript
var mainString = "hello", regex = "/hell/";
regex.test(mainString)

```
<div align="right">
    <b><a href="#js-interview-questions">↥ back to top</a></b>
</div>

### What are the benefits of keeping declarations at the top?
It is recommended to keep all declarations at the top of each script or function. The benefits of doing this are,

1. Gives cleaner code
2. It provides a single place to look for local variables
3. Easy to avoid unwanted global variables
4. It reduces the possibility of unwanted re-declarations
<div align="right">
    <b><a href="#js-interview-questions">↥ back to top</a></b>
</div>

### What is a RegExp object?
RegExp object is a regular expression object with predefined properties and methods.
```javascript
var regexp = new RegExp('\\w+');
console.log(regexp);
// expected output: /\w+/

```
<div align="right">
    <b><a href="#js-interview-questions">↥ back to top</a></b>
</div>

### What is an anonymous function?
An anonymous function is a function without a name! Anonymous functions are commonly assigned to a variable name or used as a callback function. The syntax would be as below,
```javascript
function (optionalParameters) {
  //do something
}

const myFunction = function(){ //Anonymous function assigned to a variable
  //do something
};

[1, 2, 3].map(function(element){ //Anonymous function used as a callback function
  //do something
});

```
**Example:**
```javascript
var x = function (a, b) {return a * b};
var z = x(5, 10);
console.log(z); // 50

```
<div align="right">
    <b><a href="#js-interview-questions">↥ back to top</a></b>
</div>

### How do you sort elements in an array?
The sort() method is used to sort the elements of an array in place and returns the sorted array. The example usage would be as below,
```javascript
var months = ["Aug", "Sep", "Jan", "June"];
months.sort();
console.log(months); //  ["Aug", "Jan", "June", "Sep"]

```
<div align="right">
    <b><a href="#js-interview-questions">↥ back to top</a></b>
</div>

### How do you find min and max value in an array?
You can use Math.min and Math.max methods on array variable to find the minimum and maximum elements with in an array. Let us create two functions to find the min and max value with in an array,
```javascript
var marks = [50, 20, 70, 60, 45, 30];
function findMin(arr) {
  return Math.min.apply(null, arr);
}
function findMax(arr) {
  return Math.max.apply(null, arr);
}

console.log(findMin(marks));
console.log(findMax(marks));

```
<div align="right">
    <b><a href="#js-interview-questions">↥ back to top</a></b>
</div>

### How do you find min and max values without Math functions?
You can write functions which loops through an array comparing each value with the lowest value or highest value to find the min and max values.
<div align="right">
    <b><a href="#js-interview-questions">↥ back to top</a></b>
</div>

### Explain the difference between synchronous and asynchronous functions?
Synchronous functions are blocking while asynchronous functions are not. In synchronous functions, statements complete before the next statement is run. In this case, the program is evaluated exactly in order of the statements and execution of the program is paused if one of the statements take a very long time.

Asynchronous functions usually accept a callback as a parameter and execution continue on the next line immediately after the asynchronous function is invoked. The callback is only invoked when the asynchronous operation is complete and the call stack is empty. Heavy duty operations such as loading data from a web server or querying a database should be done asynchronously so that the main thread can continue executing other operations instead of blocking until that long operation to complete (in the case of browsers, the UI will freeze).
<div align="right">
    <b><a href="#js-interview-questions">↥ back to top</a></b>
</div>

### What is event loop? What is the difference between call stack and task queue?
The event loop is a single-threaded loop that monitors the call stack and checks if there is any work to be done in the task queue. If the call stack is empty and there are callback functions in the task queue, a function is dequeued and pushed onto the call stack to be executed.

If you haven't already checked out Philip Robert's [talk on the Event Loop](https://2014.jsconf.eu/speakers/philip-roberts-what-the-heck-is-the-event-loop-anyway.html), you should. It is one of the most viewed videos on JavaScript.
<div align="right">
    <b><a href="#js-interview-questions">↥ back to top</a></b>
</div>

### What is the difference between slice and splice?
Some of the major difference in a tabular form

Slice| Splice | 
---------|----------|
 Doesn't modify the original array(immutable) | Modifies the original array(mutable) | 
 Returns the subset of original array | Returns the deleted elements as array | 
 Used to pick the elements from array | Used to insert or delete elements to/from array | 
<div align="right">
    <b><a href="#js-interview-questions">↥ back to top</a></b>
</div>

## ES6 Interview Questions

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
