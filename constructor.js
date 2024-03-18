const Person = function (name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
};

const azad = new Person("Azad Ali", 35, "student");
const kamal = new Person("kamal Ali", 35, "developer");
const monir = new Person("monir Ali", 35, "teacher");
const sojib = new Person("sojib Ali", 35, "designer");

// console.log(azad);

const PersonWithMethod = function (name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.dateOfBirth = function () {
        console.log(this.name + " is born in " + (2018 - this.age));
    };
};

const samirWithMethod = new PersonWithMethod("Samir Hossain", 22, "Web Developer");
// samirWithMethod.dateOfBirth();
// console.log(samirWithMethod);
