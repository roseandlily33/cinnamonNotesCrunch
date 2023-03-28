const apiRouter = require('express').Router();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const path = require('path');


//read the db.json file and return the saved notes as JSON:
apiRouter.get('/api/notes', (req, res) => {
    // res.json(notesArray);
})
// recieve a new note and save on the request body, add it to the db.json, and return a new note to the client: - look at npm packages to find a way to give each note a unique id:
apiRouter.post('/api/notes', (req, res) => {
    fs.appendFile('db.json', __, err => err ? console.error(err) : console.log('Written'));
})
//Recieve a query paramter that contains the id of a note to delete, it reads all notes from the db.json file, and removes the note with the given id property and then rewrites the  notes to the db.json file. 
apiRouter.delete('/api/notes/:id', (req, res) => {
    const deleted = handleNoteDelete(req.params.id);
    res.json(deleted);
})


module.exports = apiRouter;