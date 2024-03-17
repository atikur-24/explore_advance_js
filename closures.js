function temp() {
    let counter = 0;

    return function () {
        // console.log("Hello world");
        counter = counter + 1;
    };
}

const add = temp();

// console.dir(add);
// add();
// add();
// add();
