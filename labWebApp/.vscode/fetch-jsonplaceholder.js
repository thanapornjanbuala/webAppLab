
fetch('https://jsonplaceholder.typicode.com/todos')
.then(Response => Response.json)
.then(data => console.log(JSON.stringify(data)));
