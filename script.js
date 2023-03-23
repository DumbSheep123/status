fetch('https://beta.wmata.info/status')
  .then(response => response.json())
  .then(data => {
    if (data.status === 'OK') {
      alert('API is up and running!');
    } else {
      alert('API is currently down.');
    }
  })
  .catch(error => {
    alert('API access denied!');
  });
