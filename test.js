var lang = "Bangla";

function learn(topic) {
  lang = topic;
  console.log(`I am learning ${topic}`);
}

// learn("JavaScript");

// console.log(`I know ${lang}`);

// function
const fHello = () => ({
  a: 5,
  b: 6,
});
// console.log(fHello());

function hello2() {
  return () => {
    console.log("hello2 world");
  };
}
// hello2();

/* array methods */

const fruits = ["Mango", "Apple", "Banana", "Orange", "Apple"];

const result = fruits.map((f) => {
  if (f === "Apple") {
    return "Apple";
  } else {
    return "N/A";
  }
});

// console.log(result);
// console.log(fruits);

const numbers = [1, 2, 3, 4, 5];

const res = numbers.reduce((total, currentValue) => {
  return total + currentValue;
}, 0);

// console.log(res);

/* object */

const instructor = {
  name: "Atikur",
  class: "JavaScript",
  id: 23,
  education: {
    degree: "BBA",
    subjects: {
      firstYear: "Accounting",
    },
  },
};
// console.log({ ...instructor });

const { education: { degree } = {} } = instructor;

// console.log(instructor?.education?.subjects?.firstYear);

function sum(text, ...rest) {
  const result = rest.reduce((sum, cur) => sum + cur, 0);
  // console.log(`${text} ${result}`);
}

sum("This is output: ", 5, 6, 7, 8, 9);

/* nullish = null / undefined */

const language = null;

console.log(language ?? "JavaScript");
console.log(language || "JavaScript");
console.log(language && "JavaScript");
