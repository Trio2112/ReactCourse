// Standard function definition, accepting 2 parameters.
function myFunction(userName, message) {
    console.log("This is a standard function definition. Username is " + userName);
    console.log(message);
}
myFunction("Max", "What's up?");


// Standard function definition with default parameter.
function myFunction2(userName, message = "default message") {
    console.log("userName: " + userName);
    console.log("message: " + message);
}
myFunction2("Max", "This is a supplied message");
myFunction2("Max");


// Standard function definition that returns a value.
function createMessage(name) {
    return "Your name is " + name;
}
let generatedMessage = createMessage("Max");


// Here's how you define an anonymous arrow function.
() => { return "this is a an anonymous arrow function"; }


// You can also define anonymous function using the function keyword.
const functionAsVariable = function() {  return "this is an anonymous function"; }
console.log(functionAsVariable);


// And you can export a function as default.
export default function () {
    return "This is an exported default function.";
}


//If your arrow functions takes exactly one parameter, you may omit the wrapping parentheses.
//Instead of
(userName) => { return "this is an anonymous arrow function" }
//you could write
userName => { return "this is an anonymous arrow function" }


//A function can also be part of an object. In such a case, it's called a "method".
const user = {
    name: "Max",
    age: 24,
    printName() {
        console.log(this.name);
    }
}


//Functions can also be passed as parameters and also assigned to variables.
function greeter(greetFunction) { //Function is passed as a parameter.
    greetFunction();
};

greeter(() => {console.log("Hi!")}); //Defining an anonymous function to pass into the greeter function.


//Functions can also be nested within other functions.
function initGreeting() {
    const myGreeting = "Hello dude!";
    greet(myGreeting);
    
    function greet(greetingToSay) {
        console.log(greetingToSay);
    };
};

initGreeting();