JavaScript
===
The Language of the Web

### What this Workshop is About
- **NOT** a crash course on JavaScript
- JavaScript and what it can do
- Kickstart your learning in JavaScript

### Introduction
- Also known as Mocha, LiveScript, JScript, ECMAScript
- Scripting language
  - Not compiled, interpreted and executed on-the-fly
- Dynamic typing
- Supports object-oriented, imperative and functional programming styles
- Despite its name, it has nothing to do with Java

### What can JavaScript do?
- Provides interactivity to web applications
- Mainly executed in the browser to:
  - Manipulate DOM elements
  - Load content into the document without reloading
- Can be used in an application's back end using [NodeJS](http://nodejs.org/)

### Getting Started
- No installation needed!
  - Unless you're doing Node
- JavaScript comes with all browsers. Yes, even IE!
- Simply fire up your browser's console

### Language and Syntax
- Similar to C
- Learn it yourself (:
- But [beware of wats...](https://www.destroyallsoftware.com/talks/wat) (from 1:22 onwards)
- Read more about JS quirks [here](http://www.wtfjs.com/)

### Points to Note
- Case-sensitive
  - `getElementById !== getElementByid`
- Semicolons are optional
  - But please add them
- Variable scoping
  - Blocks do not have scope
  - Only functions do
  - Global variables

### Use Your Semicolons
- Automatic Semicolon Insertion (ASI)
```
// Before ASI
a = b + c
foo()

// After ASI
a = b + c; foo() // All is good
```
- However, ASI is only applied if the parser needs to do so in order to make sense of the code in question.

```
// Before ASI
a = b + c
[1].push(a)

// After ASI
a = b + c[1].push(a) // KABOOM!
```

![Use Semicolons](http://davidwalsh.name/demo/javascript-semicolons.png)

### Variable Scoping
- Declaring variables without the `var` keyword:
```
> var foo = function () { bar = 1; }
> foo();
> console.log(bar); // bar is now a global variable
1
```
- You almost never want to use globals

### Closures
- Closures are functions that refer to independent variables.
- The function defined in the closure 'remembers' the environment in which it was created.
```
function makeFunc () {
  var name = 'Mozilla';
  function displayName() {
    alert(name);
  }
  return displayName;
}

var myFunc = makeFunc();
myFunc();
```
- A function factory can create closures with different environments
```
function makeAdder (x) {
  return function (y) {
    return x + y;
  };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2));  // 7
console.log(add10(2)); // 12
```

### Callbacks
- Callback functions are derived from functional programming
- A function is passed into another function as a parameter
- Callback functions are used in: 
  - Asynchronous executions
  - In Event Listeners/Handlers
  - In `setTimeout` and `setInterval` methods
- Read more on JavaScript callbacks [here](http://javascriptissexy.com/understand-javascript-callback-functions-and-use-them/)
- ![Callback Joke](http://pbs.twimg.com/media/BLgE69jCMAAt6Dx.jpg)
- Common beginner mistakes
```
for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 1000);
}
// vs
for (var i = 0; i < 5; i++) {
  function print (x) {
    setTimeout(function () {
      console.log(x);
    }, x * 1000);
  }
  print(i);
}
```

### JS in the Browser
- To run javascript in your HTML file, simply do:
```
<script src="myscript.js"></script>
// or
<script> console.log('Hello World!'); </script>
```

### Manipulating DOM
- Retrieving DOM elements using JavaScript:
```
document.getElementById('some-id');
document.getElementByClassName('some-class');
document.getElementByTagName('some-tag');
```
- Try this on IVLE class roster!
```
var rows = document.querySelectorAll('tr[class*="dataGridCtrl-Alter"], tr[class*="dataGridCtrl-Item"]');
for (var i = 0; i < rows.length; i++) {
  rows[i].childNodes[3].innerHTML = 'Nala Cat';
  var img = rows[i].querySelectorAll('img')[0];
  img.src = 'http://nalacat.com/wp-content/uploads/2013/01/photo-2.jpg';
}
```

### Event Handling
- Attach functions to events
  - Examples of events: `click`, `focus`, `blur`, `hover`, `change`, `keydown`, etc
```
<div class="clickable" onclick="handleClick();"></div>
<div class="focusable" onfocus="handleFocus();"></div>
<div class="keyable" onkeyup="handleKeyup();"></div>

function handleClick() { ... }
function handleFocus() { ... }
function handleKeyup() { ... }
```

### Vanilla JS
- Vanilla JS is a fast, lightweight, cross-platform framework for building incredible, powerful JavaScript applications
- Used by Facebook, Google, Twitter, YouTube, Yahoo, Wikipedia, etc
- In fact, Vanilla JS is already used on more websites than jQuery, Prototype JS, MooTools, YUI, and Google Web Toolkit - combined
- Download the source [**here**](http://vanilla-js.com/)

### jQuery
- jQuery is a cross-platform JavaScript library designed to simplify the client-side scripting of HTML
- Write less, do more
- Use either the `jQuery` or `$` object
- Get the source [**here**](http://code.jquery.com/jquery-1.11.0.min.js)

#### Basics
```
$(document).ready(function () {
  // Do your stuff 
});
```
- Have to wait for DOM to load before you start manipulating it

#### Getting DOM
| Vanilla | jQuery |
| --- | --- |
| `document.getElementById('some-id')` | `$('#some-id')` |
| `document.getElementByClassName('some-class')` | `$('.some-class')` |
| `document.getElementByTagName('some-tag')` | `$('some-tag')` |

#### Event Handling
| Vanilla | jQuery |
| --- | --- |
|`<div class="clickable" onclick="handleClick();"></div>` | `$('div').click(function () { ... })` |
| `<div class="focusable" onfocus="handleFocus();"></div>` | `$('div').focus(function () { ... })` |
| `<div class="keyable" onkeyup="handleKeyup();"></div>` | `$('div').on('keyup', function () { ... })` |

#### Animations
- jQuery comes with some handy animations including: `fadeIn`, `fadeOut`, `hide`, `slideUp`
- jQUery animations are **slow**
- Use CSS3 animations instead

### DOM Injection
- Beware of DOM injection when rendering user-submitted content on your webpage!
- Use jQuery's `.text()` method for encoding of special characters such as `<` and `>`

### JavaScript Tools
- [**UnderscoreJS**](http://underscorejs.org/)
  - A library of functional programming helpers, such as `map`, `filter`, `reduce`, etc
  - A must use for functional programmers
- [**RequireJS**](http://requirejs.org/)
  - Forces you to write modular javascript
  - Handles nested dependencies
- [**Bower**](http://bower.io/)
  - A package manager, not a library
  - Keeps your libraries structured

### JavaScript Frameworks
- Why use front end MVC frameworks?
  - Prevent DOM manipulation logic from being intermingled with application logic and network requests
  - Better organziation of front end code
  - [When does it make sense to use an MVC framework for JavaScript](http://www.quora.com/JavaScript-Frameworks/When-does-it-make-sense-to-use-an-MVC-framework-for-JavaScript)
- Examples: [AngularJS](https://angularjs.org/), [EmberJS](http://emberjs.com/), [BackboneJS](http://backbonejs.org/). 
- Bonus: Full stack JS framework - [MeteorJS](https://www.meteor.com/)
- [JavaScript Framework Comparisons](http://blog.stevensanderson.com/2012/08/01/rich-javascript-applications-the-seven-frameworks-throne-of-js-2012/)

### JavaScript Resources
- [DailyJS](http://dailyjs.com/)
- [SuperheroJS](http://superherojs.com/)
- [Best Resources to Learn JavaScript](http://stackoverflow.com/questions/11246/best-resources-to-learn-javascript)
- [Must Watch Videos of JavaScript](https://github.com/bolshchikov/js-must-watch)

### Readings
- [Eloquent JavaScript](http://eloquentjavascript.net/)
- [Secrets of the JavaScript Ninja](http://jsninja.com/)
- [JavaScript: The Definitive Guide](http://www.amazon.com/exec/obidos/ASIN/0596101996/wrrrldwideweb)
- [JavaScript: The Good Parts](http://www.amazon.com/JavaScript-Good-Parts-Douglas-Crockford/dp/0596517742/)
- ![JavaScript Books Comparison](http://blog.notadomain.com/zbtn-2014-02/img/javascript-the-good-parts-the-definitive-guide.jpg)

### References
- [JavaScript:The World's Most Misunderstood Programming Language](http://javascript.crockford.com/javascript.html)
- [Douglas Crockford: The JavaScript Programming Language](http://www.youtube.com/watch?v=v2ifWcnQs6M)
- [Semicolons](http://dailyjs.com/2012/04/19/semicolons/)
- [The Truth About Semicolons in JavaScript](http://davidwalsh.name/javascript-semicolons)
- [JavaScript Function Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Closures)
