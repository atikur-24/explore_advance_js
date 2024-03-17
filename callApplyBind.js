/* --------- Call Method ---------- */
const myCustomObj = {
    name: "Atikur Rahman",
    age: 23,
    job: "Web Developer",
    anotherObj: {
        name: "Saad",
        value: function () {
            console.log("My name is " + this.name);
        },
    },
};
// myCustomObj.anotherObj.value.call(myCustomObj);

const john = {
    name: "John Doe",
    dob: 1996,
    age: function (currentYear) {
        console.log(this.name + " is " + (currentYear - this.dob) + " year old");
    },
};

const david = {
    name: "David Thomson",
    dob: 1986,
};
// john.age(2018);
// john.age.call(david, 2018);

const person = {
    fullName: function (city, country) {
        return this.firstName + " " + this.lastName + "," + city + "," + country;
    },
};
const person1 = {
    firstName: "John",
    lastName: "Doe",
};
const person2 = {
    firstName: "Mary",
    lastName: "Doe",
};
// console.log(person.fullName.call(person2, "Dhaka", "Bangladesh"));

/* --------- Apply Method ---------- */

const anotherPerson = {
    fullName: function (city, country) {
        return this.firstName + " " + this.lastName + "," + city + "," + country;
    },
};

const anotherPerson1 = {
    firstName: "John",
    lastName: "Doe",
};
// console.log(person.fullName.apply(anotherPerson1, ["Oslo", "Norway"]));

const martinez = {
    name: "Martinez Emy",
    dob: 1996,
    age: function (currentYear, msg) {
        return msg + " " + this.name + " " + (currentYear - this.dob) + " year old";
    },
};

const jack = {
    name: "Jack Fernando",
    dob: 1986,
};
// console.log(martinez.age.apply(jack, [2018, "This is"]));

/* --------- Bind Method ---------- */
const myCustomObj4 = {
    name: "Atikur Rahman",
    age: 23,
    job: "Web Developer",
    anotherObj: {
        name: "Saad",
        value: function () {
            console.log("My name is " + this.name);
        },
    },
};

const storeFunc = myCustomObj4.anotherObj.value.bind(myCustomObj4);
// storeFunc();

const watson = {
    name: "Watson Shane",
    dob: 1996,
    age: function (currentYear, msg) {
        console.log(msg + " " + this.name + " " + (currentYear - this.dob) + " year old");
    },
};

const smith = {
    name: "Smith Stine",
    dob: 1986,
};

const smithAge = watson.age.bind(smith, 2018);
// smithAge("This is");

const personBind = {
    firstName: "John",
    lastName: "Doe",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    },
};

const member = {
    firstName: "Hege",
    lastName: "Nilsen",
};

let fullName = personBind.fullName.bind(member);

// console.log(fullName());
