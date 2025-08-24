const { rejects } = require("assert");
const { error, clear } = require("console");
const { resolve } = require("path");

function promisifiedFetch(url){
    return new Promise((resolve, rejects) =>{
        fetch(url).then((data) => resolve(data)).catch((error) => rejects(error));
    });

 
}

   promisifiedFetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error)=>consol.log(error))