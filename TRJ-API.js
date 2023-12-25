const express = require('express')
const bodyParser = require('body-parser');
const request = require('supertest');




// Book Object
class Book {
    constructor(id, title, author) {
        this.id = id;
        this.title = title;
        this.author = author;
    }

}


// Array of the books
let books = [
    { id: 1, title: 'Book 1', author: 'Author 1' },
    { id: 2, title: 'Book 2', author: 'Author 2' },
    { id: 3, title: 'Book 3', author: 'Author 3' },
];

// Express Instance Creation
const app = express();



//Middleware function
app.use(bodyParser.json());
app.use((req, res, next) => {
    const timestamp = new Date().toISOString();
    console.log(`Timestamp: ${timestamp}, Method: ${req.method}, Path: ${req.path}`);
    next();
});

app.get('/', (req, res) => {
    res.send('Return Journey API assignment');
});

// GET API for book with the help of id
app.get('/books/:id', (req, res) => {

    let id = parseInt(req.params.id);


    let book = books.find(book => book.id === id);

    if (book) {
        // If the book found in the array, send it in the response
        res.json(book);
    } else {
        // If the book was not found, send a 404 Not Found status
        res.status(404).send('Book not found');
    }
});


//GET API to get all the books present in the book array
app.get('/allbooks', (req, res) => {
    res.json(books);
});


// DELTE API to delete  the book with particular id
app.delete('/delete/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = books.findIndex(books => books.id === id);

    if (index !== -1) {
        books.splice(index, 1);
        console.log(books);
        res.status(200).send(`Element with id ${id} deleted.`);
    } else {
        res.status(404).send(`Element with id ${id} not found.`);
    }
});


// POST API to add a book in the books array
app.post('/postbooks', (req, res) => {
    const newBook = req.body;
    books.push(newBook);
    console.log(books)
    res.status(201).send(`Book with id ${newBook.id} added.`);
});



// PUT API to update a book in the books array
app.put('/updatebooks/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const updatedBook = req.body;
    const index = books.findIndex(book => book.id === id);

    if (index !== -1) {
        books[index] = updatedBook;
        res.status(200).send(`Book with id ${id} updated.`);
        console.log(books);
    } else {
        res.status(404).send(`Book with id ${id} not found.`);
    }
});




// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
    console.log(books);
});

function expect(any) {
    throw new Error('Function not implemented.');
}

module.exports = app; // Export for testing