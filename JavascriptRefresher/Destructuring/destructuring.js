//Destructure an array into values.
const fullName = ["Brent", "Muhlestein"];
const [firstName, lastName] = fullName; // Note: Square brackets on the left side are used for destructing.

console.log(firstName);
console.log(lastName);


//Destructure an object into values.
const user = {
    firstName2: "John",
    lastName2: "McJohnster"
};

// Note: Curly braces on the left side are used for destructing.
// And the colon on the left side is used to assign an alias.
const {firstName2 : firstNameAlias, lastName2 : lastNameAlias} = user;
console.log(firstNameAlias);
console.log(lastNameAlias);


//Destructing can also be built into parameters of a function.
const product = {
    id: 12345,
    description: "Tonka Truck",
    amount: 29.78
};

PrintDescriptionAndAmount(product); //Pass the whole product object to the function.

function PrintDescriptionAndAmount({description, amount}){ //Desctructure only the parameters needed (description and amount).
    console.log(description);
    console.log(amount);
};

//NOTE: It's very important to understand, that PrintDescriptionAndAmount still only takes one parameter in this example!
// It does not accept two parameters. Instead, it's one single parameter - an object which then just is destructured internally.

// The function would still be called like this:
PrintDescriptionAndAmount({description: "My Description", amount: 72.87 }); // one argument