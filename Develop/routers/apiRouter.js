const apiRouter = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const util = require('util');
const fs = require('fs');
const { parse } = require('path');
const readNotes = util.promisify(fs.readFile);
const writeNotes = util.promisify(fs.writeFile);


apiRouter.get('/notes', (req, res) => {
    console.log(req.method + 'Request sent');
    readNotes('Develop/db/db.json', 'utf-8')
        .then(data => {
            console.log(data);
            return res.json(JSON.parse(data));
        })
        .catch(err => console.error(err));
})

apiRouter.post('/notes', (req, res) => {
    console.log(`${req.method} is made`);
    console.log('New Note Recieved' + req.body);

    let newNote = req.body;
    newNote.id = uuidv4();

    readNotes('Develop/db/db.json', 'utf-8')
        .then(data => {
            const parseNotes = JSON.parse(data);
            parseNotes.push(newNote);
            console.log('Parsed and pushed');
            writeNotes('Develop/db/db.json', JSON.stringify(parseNotes));
        })


})
//Recieve a query paramter that contains the id of a note to delete, it reads all notes from the db.json file, and removes the note with the given id property and then rewrites the  notes to the db.json file. 
apiRouter.delete('/api/notes/:id', (req, res) => {
    console.log(`${req.params} is deleting`);
    //  const deleted = req.params.id;
    // res.json(deleted);
})


module.exports = apiRouter;
