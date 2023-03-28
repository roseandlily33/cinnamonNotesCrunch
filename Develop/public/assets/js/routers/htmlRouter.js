const htmlRouter = require('express').Router();
const path = require('path');

// Get the index.html file:
htmlRouter.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../Develoop/public/index.html'));
})

//Should return the notes.html file
htmlRouter.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../Develop/public/notes.html'));
})


module.exports = htmlRouter;