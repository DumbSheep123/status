const urlist = {
    'wmata': 'https://wmata.info',
    'beta-wmata': 'https://beta.wmata.info'
};

Object.keys(urls).forEach(key => {
    const url = urlist[key];
    const statusElement = document.querySelector(`#${key}`);
    fetch(url)
        .then(response => {
            if (!response.ok) {
                statusElement.classList.remove('status-up');
                statusElement.classList.add('status-down');
                statusElement.querySelector('.status-text').textContent = `Server is down (${response.status})`;
                console.log(response);
            } else {
                statusElement.classList.remove('status-down');
                statusElement.classList.add('status-up');
                statusElement.querySelector('.status-text').textContent = 'All systems operational';
                console.log(response);
            }
        })
        .catch(error => {
            statusElement.classList.remove('status-up');
            statusElement.classList.add('status-down');
            statusElement.querySelector('.status-text').textContent = 'Server is down (network error)';
        });
});