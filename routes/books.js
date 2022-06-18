const router = require('express').Router();

let books = [
    { id: 1, title: 'Book 1', author: 'John Doe', year: '2020', },
    { id: 2, title: 'Book 2', author: 'Jane Doe', year: '2021', },
    { id: 3, title: 'Book 3', author: 'John Doe', year: '2022', },
]

router.get('/', (req, res) => {
    res.json(books);
})

router.get('/:id', (req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.id));
    if (!book) return res.status(404).json({ msg: 'Book not found' });
    res.status(200).json(book);
})

router.post('/add', (req, res) => {

    const book = {
        id: books.length + 1,
        title: req.body.title,
        author: req.body.author,
        year: req.body.year,
    }
    books.push(book);
    res.status(200).json(book);
})


router.put('/:id', (req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.id));
    if (!book) return res.status(404).json({ msg: 'Book not found' });
    book.title = req.body.title || book.title;
    book.author = req.body.author || book.author;
    book.year = req.body.year || book.year;
    books = books.map(b => b.id === book.id ? book : b);
    res.status(200).json(book);
})

router.delete('/:id', (req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.id));
    if (!book) return res.status(404).json({ msg: 'Book not found' });
    books.splice(books.indexOf(book), 1);
    res.status(200).json(book);
})


module.exports = router;