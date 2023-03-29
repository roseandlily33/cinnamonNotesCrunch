const apiRouter = require('express').Router();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const path = require('path');
const notes = require('../../db/db.json');


//read the db.json file and return the saved notes as JSON:
apiRouter.get('/api/notes', (req, res) => {
    console.log('Request sent ')
    return res.json(notes);
    // fs.readFile('../db/db.json', 'utf-8', (err, data) => {
    //   err ? console.error(err) :  res.json(notes);
    // })
})
// recieve a new note and save on the request body, add it to the db.json, and return a new note to the client: - look at npm packages to find a way to give each note a unique id:
apiRouter.post('/api/notes', (req, res) => {
    console.log('New Note Recieved' + req.body);

    const { title, text } = req.body;
    if (req.body) {
        let newNote = {
            title,
            text,
            id: uuidv4(),
        }
        console.log('Note is reciebed');
        res.json('Note is recieved')
    } else {
        console.log('Note has not been recieved');
        res.json('Note has not been recieved');
    }
    //let newNote = req.body;
    //newNote.id = uuidv4();
    //notes.push(newNote);
    //fs.writeFile('../db/db.json', newNote, (err) => {
    //  err ? console.error(err) : console.log('Note was noted');
    //})

})
//Recieve a query paramter that contains the id of a note to delete, it reads all notes from the db.json file, and removes the note with the given id property and then rewrites the  notes to the db.json file. 
apiRouter.delete('/api/notes/:id', (req, res) => {
    console.log('Deleted note')
    const deleted = req.params.id;
    // res.json(deleted);
})


module.exports = apiRouter;
