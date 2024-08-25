//Node JS require
//The basic functionality of require is that it reads a 
//JavaScript file, executes the file, and then proceeds 
//to return the export object.
const express = require('express');

//The express() syntax is the equivalent of saying new express(). 
//It creates a new instance of express that you can assign to a variable.
const app = express();

// FETCHING SEARCHING RECORD/DOCUMENT..DEFAULT REQUEST FROM BROWSER

app.get('/', (req, res) => {
    res.send('<html><body><h1>INSIDE GET METHOD..THIS IS VIEW ALL API..</h1></body></html>');
});

app.get('/search', (req, res) => {
    res.send('<html><body><h1>INSIDE GET SEARCH METHOD..THIS IS SEARCH API..</h1></body></html>');
});


// INSERT RECORD/Document
app.post('/insert', (req, res) => {
    res.send('<h3>INSIDE POST METHOD..THIS IS INSERT API..</h3>');
});

// UPDATE RECORD/Document
app.put('/update', (req, res) => {
    res.send('<h2>INSIDE PUT METHOD..THIS IS UPDATE API..</h2>');
});

// DELETE RECORD/Document
app.delete('/delete', (req, res) => {
    res.send('<h3>INSIDE DELETE METHOD..THIS IS DELETE API..</h3>');
});

// ACCEPT REQUEST FROM CLIENT AT PORT NO 5000
app.listen(5000, () => {
    console.log('Express Server is Running at Port No 5000');
});

