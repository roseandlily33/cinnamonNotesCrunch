const htmlRouter = require('express').Router();
const path = require('path');

//Should return the notes.html file
htmlRouter.get('/notes', (req, res) => {
    console.log('Routed to notes')
    res.sendFile(path.join(__dirname, '../public/notes.html'));
})
// Get the index.html file:
htmlRouter.get('/', (req, res) => {
    console.log('Routed to main')
    res.sendFile(path.join(__dirname, '../public/index.html'));
})



module.exports = htmlRouter;