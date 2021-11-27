const axios = require('axios').default;

axios.post('http://localhost:3000/books', {
    ID: 3,
    name: 'My Boook',
    author: 'Me and only me'
}).then((res) => {
    console.log(res.data);
}).catch(err => {
    console.log(err.response.data);
});

// Atividade 1
axios.post('http://localhost:3000/books', {
    ID: 4,
    name: 'Novo Livro',
    author: 'Desconhecido'
}).then((res) => {
    console.log(res.data);
}).catch(err => {
    console.log(err.response.data);
});


axios.get('http://localhost:3000/books')
    .then((response) => {
        console.log(response.data);
    });
