fetch('https://beta.wmata.info/status')
    .then(response => response.json())
    .then(data => {
        if (data.status === 'OK') {
            statusElement.classList.remove('status-down');
            statusElement.classList.add('status-up');
            statusElement.querySelector('.status-text').textContent = 'All systems operational';
        } else {
            statusElement.classList.remove('status-up');
            statusElement.classList.add('status-down');
            statusElement.querySelector('.status-text').textContent = `Server is down (${data.status})`;
        }

    })
    .catch(error => {
        alert('There is an error in the way we check the status. Please try again.');
    });
