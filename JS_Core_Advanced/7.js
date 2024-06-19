function divideNumbers(a, b) {
    if (b === 0) {
        throw new Error("Деление на ноль невозможно");
    }
    
    return a / b;
}


try {
    console.log(divideNumbers(10, 2)); 
    console.log(divideNumbers(10, 0)); 
} catch (error) {
    console.error(error.message);
}