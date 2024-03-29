function helloThis() {
    "use strict";
    console.log(this);
}
// helloThis();

const myCustomObj = {
    name: "Atikur Rahman",
    age: 23,
    job: "Web Developer",
    msg: function () {
        console.log(this);
    },
};
// myCustomObj.msg();

const myCustomObj2 = {
    name: "Atikur Rahman",
    age: 23,
    job: "Web Developer",
    anotherObj: {
        name: "Saad",
        msg: function () {
            console.log("My name is: " + this.name);
        },
    },
};
// myCustomObj2.anotherObj.msg();

const myCustomObj3 = {
    name: "Atikur Rahman",
    age: 23,
    job: "Web Developer",
    anotherObj: {
        name: "Saad",
        value: function () {
            console.log(this);
        },
    },
};
// myCustomObj3.anotherObj.value();

const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    },
};

const person2 = {
    firstName: "Stive",
    lastName: "Smith",
};

// console.log(person.fullName());
// console.log(person.fullName.call(person2));
