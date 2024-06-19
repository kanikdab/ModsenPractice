function fetchDataFromAPI(apiURL) {
    return fetch(apiURL)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Ошибка HTTP: ${response.status}`);
            }
            return response.json();
        });
}

function fetchMultipleAPIs(apiURLs) {
    const promises = apiURLs.map(apiURL => fetchDataFromAPI(apiURL));

    return Promise.all(promises)
        .then(results => {
            return results;
        })
        .catch(error => {
            console.error('Ошибка при выполнении запросов:', error);
            throw error;
        });
}

// Пример использования
const apiURLs = [
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/posts/2',
    'https://jsonplaceholder.typicode.com/posts/3'
];

fetchMultipleAPIs(apiURLs)
    .then(results => {
        console.log('Результаты из всех API:', results);
    })
    .catch(error => {
        console.error('Ошибка при выполнении запросов:', error);
    });
