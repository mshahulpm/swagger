globalThis.users = [
    { id: 1, name: 'John', age: 20, }, { id: 2, name: 'Jane', age: 21, }
]
const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

// routes 
const booksRouter = require('./routes/books');


const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Book API',
            version: '1.0.0',
            description: 'A simple Express API',
        },
        servers: [
            {
                url: 'http://localhost:3000/',
            }
        ],
    },
    apis: ['./routes/*.js']
}

const specs = swaggerJsDoc(swaggerOptions);

const app = express();
app.use(cors());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.use('/books', booksRouter);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})