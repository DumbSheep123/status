const urls = {
    'wmata': 'http://wmata.info',
    'beta-wmata': 'http://beta.wmata.info'
};

Object.keys(urls).forEach(key => {
    const url = urls[key];
    const statusElement = document.querySelector(`#${key}`);
    fetch(url)
        .then(response => {
            if (!response.ok) {
                statusElement.classList.remove('status-up');
                statusElement.classList.add('status-down');
                statusElement.querySelector('.status-text').textContent = `Server is down (${response.status})`;
            } else {
                statusElement.classList.remove('status-down');
                statusElement.classList.add('status-up');
                statusElement.querySelector('.status-text').textContent = 'All systems operational';
            }
        })
        .catch(error => {
            statusElement.classList.remove('status-up');
            statusElement.classList.add('status-down');
            statusElement.querySelector('.status-text').textContent = 'Server is down (network error)';
        });
});