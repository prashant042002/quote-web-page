function getQuote() {
    const url = `https://api.quotable.io/random`;

    fetch(url)
        .then(response =>{
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data=> {
            const quoteInfo = `Quote: ${data.content}<br><br> By: ${data.author}` ;
            document.getElementById('quote-info').innerHTML = quoteInfo;
        })
        .catch(error=>{
            document.getElementById('quote-info').innerHTML = 'Error fetching weather data';
            console.error('There was a problem with the fetch operation:', error);
        })
}

