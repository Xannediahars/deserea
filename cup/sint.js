/**
 * Fetches data from the specified URL and processes it.
 * 
 * @param {string} url - The URL from which to load the data. This string
 * should be a valid URL pointing to the resource you wish to fetch.
 * 
 * @returns {Promise<Object>} A promise that resolves to the data object fetched from the URL.
 */
function fetchData(url) {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Process the data here if necessary
            return data; 
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            throw error;
        });
}
