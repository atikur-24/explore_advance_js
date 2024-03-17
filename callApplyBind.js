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
// myCustomObj.anotherObj.value.call(myCustomObj)

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

// john.age(2018)
// john.age.call(david, 2018)
