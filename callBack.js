function calculation(num1, num2, callbackFunc) {
    const sum = num1 + num2;
    if (callbackFunc) callbackFunc(sum);
}

calculation(7, 3, function (result) {
    console.log(result);
});
