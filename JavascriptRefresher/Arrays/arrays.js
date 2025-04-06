//Create an array.
const hobbies = ["sports", "cooking", "reading"];
console.log(hobbies[0]);


//Add a new item to an array.
hobbies.push("working");
console.log(hobbies);


//Find the index of a certain value.
//Take a function as an input, which is a great time to use an arrow function.
const index = hobbies.findIndex((item) => { return item === "cooking"; });
console.log(index);


//A shorter way of writing the above findIndex statement would be...
const index2 = hobbies.findIndex((item) => item === "reading" );
console.log(index2);


//Map works similar to linq "select" statements.
const newArray = hobbies.map((item) => item + "!'");
console.log(newArray);


//Another map example.
const arrayOfObjects = hobbies.map((item) => ({ key: "myKey", value: item }) );
console.log(arrayOfObjects);


//To return a single object in the array that matches given criteria.
const myObject = arrayOfObjects.find((item) => item.value == "reading" );
if (myObject != null) {
    console.log(myObject.value);
}


//To return all objects in an array that match given criteria.
const filteredArray = arrayOfObjects.filter((item) => item.value.includes("g"));
console.log(filteredArray);


//Use the special "spread" operator to merge two arrays into one.
const arrayOne = ["a", "b", "c"];
const arrayTwo = ["d", "e", "f", "g"];
//Spread operator pulls out each value from each array and adds them as stand-alone values to the merged array.
const mergedArray = [...arrayOne, ...arrayTwo];
console.log(mergedArray);


//Quick way to loop through each item in an array.
for (const item of hobbies) {
    console.log(item);
}