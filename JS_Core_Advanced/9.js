// Функция для выполнения запроса к API и возврата данных
async function fetchDataFromAPI(apiURL) {
    const response = await fetch(apiURL);
    if (!response.ok) {
        throw new Error(`Ошибка HTTP: ${response.status}`);
    }
    const data = await response.json();
    return data;
}

// Функция для выполнения запросов к нескольким API и объединения результатов
async function fetchMultipleAPIs(apiURLs) {
    const promises = apiURLs.map(apiURL => fetchDataFromAPI(apiURL));
    try {
        const results = await Promise.all(promises);
        return results;
    } catch (error) {
        console.error('Ошибка при выполнении запросов:', error);
        throw error;
    }
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
