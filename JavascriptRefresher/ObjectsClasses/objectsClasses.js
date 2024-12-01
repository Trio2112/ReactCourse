//Define and use an object
const user = {
    name: "Max",
    age: 24,
    printName() {
        console.log(this.name);
    }
}
user.printName();


//You can also define a class and declare an instance as an object.
class MyPerson {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    printName() {
        console.log(this.name);
    }
}

let dude = new MyPerson("Max", 24);
dude.printName();


//Use the special "spread" operator to merge the properties of one object to another object.
const extendedUser = {
    isAdmin: true,
    ...user
};
console.log(extendedUser);