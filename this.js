function helloThis() {
    // "use strict";
    // console.log(this);
}
helloThis();

function unNamed() {
    this.name = "Atikur Rahman";
}
unNamed();
// console.log(name);

const myCustomObj = {
    name: "Atikur Rahman",
    age: 23,
    job: "Web Developer",
    msg: function () {
        console.log(this);
    },
};
// myCustomObj.msg()

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
// myCustomObj2.anotherObj.msg()

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
// myCustomObj3.anotherObj.value()
