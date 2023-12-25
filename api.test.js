const http = require('http');
const assert = require('assert');


//Test of the POST API
describe('POST /postbooks', () => {
    it('responds with json containing the added book', done => {
        const newBook = JSON.stringify({ id: 3, title: 'Book3', author: 'Author3' });
        const options = {
            hostname: 'localhost',
            port: 3000,
            path: '/postbooks',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': newBook.length
            }
        };

        const req = http.request(options, res => {
            let data = '';

            res.on('data', chunk => {
                data += chunk;
            });

            res.on('end', () => {
                assert.strictEqual(data, `Book with id 3 added.`);
                done();
            });
        });

        req.write(newBook);
        req.end();
    });
}, 10000); // Timeout of 10 seconds

//Test of PUT API
describe('PUT /updatebooks/:id', () => {
    it('responds with json containing the added book', done => {
        const id = 3
        const newBook = JSON.stringify({ id: 3, title: 'Book3', author: 'Author3' });
        const options = {
            hostname: 'localhost',
            port: 3000,
            path: '/updatebooks/3',
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': newBook.length
            }
        };

        const req = http.request(options, res => {
            let data = '';

            res.on('data', chunk => {
                data += chunk;
            });

            res.on('end', () => {
                assert.strictEqual(data, `Book with id 3 updated.`);
                done();
            });
        });

        req.write(newBook);
        req.end();
    });
}, 10000); // Timeout of 10 seconds