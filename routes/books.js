const router = require('express').Router();

const books = [
    { id: 1, title: 'Book 1', author: 'John Doe', year: '2020', },
    { id: 2, title: 'Book 2', author: 'Jane Doe', year: '2021', },
    { id: 3, title: 'Book 3', author: 'John Doe', year: '2022', },
]

/**
 * @swagger
 * components:
 *    schemas:
 *     Book:
 *      type: object
 *      properties:
 *       id:
 *        type: integer
 *       title:
 *        type: string
 *       author:
 *        type: string
 *       year:
 *        type: string
 *      example:
 *       id: 1
 *       title: Book 1
 *       author: John Doe
 *       year: 2020
 *     Error:
 *      type: object
 *      properties:
 *        msg:
 *         type: string
 *      example:
 *       msg: 'Error message'
 * 
 */

/** 
 * @swagger
 * /books:
 *   get:
 *     summary: Get all books
 *     responses:
 *       200:
 *          description: An array of books
 *          content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/Book'
*/
console.log(globalThis.users);

router.get('/', (req, res) => {
    res.send(books);
})

/** 
 * @swagger
 * /books/{id}:
 *   get:
 *     summary: Get a book by id
 *     tags : [Books]
 *     parameters:
 *       - in: path
 *       name: id
 *      schema:
 *        type: integer
 *        required: true
 *         description: The id of the book to retrieve
 *     responses:
 *      200:
 *       description: A single book
 *       content:
 *       application/json:
 *        schema:
 *         $ref: '#/components/schemas/Book'
 *      404:
 *        description: Book not found
 *        content:
 *        application/json:
 *         schema:
 *          $ref: '#/components/schemas/Error'
*/

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
    res.status(200).json(book);
})

router.delete('/:id', (req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.id));
    if (!book) return res.status(404).json({ msg: 'Book not found' });
    books.splice(books.indexOf(book), 1);
    res.status(200).json(book);
})


module.exports = router;