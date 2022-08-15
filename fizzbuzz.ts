function checkFizzBuzz(input: number): string {
    let output: string
    if (input % 3 === 0 && input % 5 === 0) {
        output = 'FizzBuzz';
    } else if (input % 3 === 0) {
        output = 'Fizz';
    } else if (input % 5 === 0) {
        output = 'Buzz';
    } else {
        output = ''
    }
    return output
}

const inputList: number[] = [1, 3, 5, 6, 14, 15, 17]
for (const input of inputList) {
    console.log(`output: ${checkFizzBuzz(input)}`)
}