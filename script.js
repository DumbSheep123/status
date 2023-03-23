const urlist = {
    'wmata': 'https://wmata.info',
    'beta-wmata': 'https://beta.wmata.info'
};

Object.keys(urls).forEach(key => {
    const url = urls[key];
    const statusElement = document.querySelector(`#${key}`);
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
            statusElement.classList.remove('status-down');
            statusElement.classList.add('status-up');
            statusElement.querySelector('.status-text').textContent = 'All systems operational';
            console.log(xhr.status)
        } else {
            statusElement.classList.remove('status-up');
            statusElement.classList.add('status-down');
            statusElement.querySelector('.status-text').textContent = `Server is down (${xhr.status})`;
            console.log(xhr.status)
        }
    };
    xhr.onerror = () => {
        statusElement.classList.remove('status-up');
        statusElement.classList.add('status-down');
        statusElement.querySelector('.status-text').textContent = 'Server is down (network error)';
    };
    xhr.send();
});