// Declare dependencies
const express = require("express");
const fs = require("fs");
const path = require("path");
const notes = require("./db/db.json");

//Establish port and express 
const PORT = process.env.PORT || 3001
const app = express();

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use(express.static('public'));

//Establish GET routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
  });
 
// GET route to get the notes html
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'));
})  

//GET note data
app.get('/api/notes', (req, res) => res.json(notes));
  
// PORT listener
app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});
  