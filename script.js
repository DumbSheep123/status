// Get the status element
const statusElement = document.getElementById('status');

// Define a function to fetch the API status and update the UI
window.onload = function updateStatus() {
  fetch('/status')
    .then(response => response.json())
    .then(data => {
      if (data.response === '"OK"') {
        statusElement.classList.remove('status-down');
        statusElement.classList.add('status-up');
        alert(data.response);
        statusElement.querySelector('.status-text').textContent = 'All systems are operational';
      } else {
        statusElement.classList.remove('status-up');
        statusElement.classList.add('status-down');
        statusElement.querySelector('.status-text').textContent = `Server is down (${data.status})`;
      }
    })
    .catch(error => {
      statusElement.classList.remove('status-up');
      statusElement.classList.add('status-down');
      statusElement.querySelector('.status-text').textContent = 'API access denied!';
    });
}

// Call the updateStatus function every 5 seconds
setInterval(updateStatus, 5000);