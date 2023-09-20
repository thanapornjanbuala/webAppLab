const apiUrl = 'https://api.github.com/users/thanapornjanbuala';
fetch(apiUrl)
  .then((response) => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error('Failed to fetch data');
    }
  })
  .then((data) => {
    const username = data.login;
    const location = data.location;
    console.log(`GitHub user name is ${username} who lives in ${location}`);
  })
  .catch((error) => {
    console.error(`Error: ${error.message}`);
  });
