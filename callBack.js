// asynchronous behavior
const paymentSuccess = true;
const marks = 80;

function enroll(callback) {
    console.log("Course enrollment in in progressing...");
    1;

    setTimeout(function () {
        if (paymentSuccess) {
            callback();
        } else console.log("Payment Failed!");
    }, 2000);
}

function process(callback) {
    console.log("Course on progress...");
    2;

    setTimeout(function () {
        if (marks >= 80) {
            callback();
        } else console.log("Not enough mark");
        3;
    }, 3000);
}

function getCertificate() {
    console.log("Preparing your certificate...");

    setTimeout(function () {
        console.log("Congrats! you got the certificate");
    }, 1000);
}

enroll(function () {
    process(getCertificate);
});

// basic syntax of callback
function calculation(num1, num2, callbackFunc) {
    const sum = num1 + num2;
    if (callbackFunc) callbackFunc(sum);
}

calculation(7, 3, function (result) {
    // console.log(result);
});
