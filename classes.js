class Person {
    constructor(name, age, job) {
        this.name = name;
        this.age = age;
        this.job = job;
    }
}

const atikur = new Person("Atikur", 23, "MERN Stack Developer");
const masud = new Person("Masud", 23, "Frontend Developer");
const mamun = new Person("Atikur", 23, "Backend Developer");
// console.log(mamun);

class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    age() {
        const date = new Date();
        return date.getFullYear() - this.year;
    }
}

const myCar = new Car("Ford", 2014);
console.log("My car is " + myCar.age() + " years old.");
