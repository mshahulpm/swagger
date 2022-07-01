globalThis.users = [
    { id: 1, name: 'John', age: 20, }, { id: 2, name: 'Jane', age: 21, }
]
const express = require('express');
const cors = require('cors');

// routes 
const booksRouter = require('./routes/books');
const docsRouter = require('./routes/docs');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))


// docs 
app.use('/docs', docsRouter);
app.use('/books', booksRouter);

app.post('/form', (req, res) => {
    console.log(req.body)
    res.redirect('/')
})

app.get('/users', (req, res) => {
    res.send(globalThis.users);
})

app.listen(5000, () => {
    console.log('Server is running on port 5000');
})