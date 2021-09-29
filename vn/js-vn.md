# JS Interview Questions

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

