function getRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
}

function delayWithRandomTimeout() {
    return new Promise((resolve, reject) => {
        const randomNumber = getRandomNumber();
        const delay = randomNumber * 1000; 

        setTimeout(() => {
            if (randomNumber >= 1 && randomNumber <= 5) {
                resolve(`Успех! Случайное число: ${randomNumber}`);
            } else {
                reject(`Ошибка! Случайное число: ${randomNumber}`);
            }
        }, delay);
    });
}

// Пример использования функции
delayWithRandomTimeout()
    .then(message => {
        console.log(message);
    })
    .catch(error => {
        console.error(error);
    });
