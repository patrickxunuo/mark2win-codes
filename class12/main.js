//fetch-promise

//pre 2015 ajax, async javascript and xml

//ES2015, fetch API

const req = fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
    .finally(() =>console.log('end'))
console.log(req)

// setTimeout(() => console.log(req),2000)

// async, sync, es2015 task implement mechanism

