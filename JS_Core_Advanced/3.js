function sumFirstAndLastDigit(number) {
    const numStr = number.toString();
    const firstDigit = parseInt(numStr[0]);
    const lastDigit = parseInt(numStr[numStr.length - 1]);

    const sum = firstDigit + lastDigit;
    console.log(sum);
}

