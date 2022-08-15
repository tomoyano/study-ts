function checkFizzBuzz(input) {
    var output;
    if (input % 3 === 0 && input % 5 === 0) {
        output = 'FizzBuzz';
    }
    else if (input % 3 === 0) {
        output = 'Fizz';
    }
    else if (input % 5 === 0) {
        output = 'Buzz';
    }
    else {
        output = '';
    }
    return output;
}
var inputList = [1, 3, 5, 6, 14, 15, 17];
for (var _i = 0, inputList_1 = inputList; _i < inputList_1.length; _i++) {
    var input = inputList_1[_i];
    console.log("output: ".concat(checkFizzBuzz(input)));
}
