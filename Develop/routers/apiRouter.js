const apiRouter = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const util = require('util');
const fs = require('fs');
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

    let newNote = req.body;
    newNote.id = uuidv4();

    readNotes('Develop/db/db.json', 'utf-8')
        .then(data => {
            const parsedNotes = JSON.parse(data);
            parsedNotes.push(newNote);
            writeNotes('Develop/db/db.json', JSON.stringify(parsedNotes));
            console.log('Parsed and pushed');
            return res.json(parsedNotes);
        })
        .catch(err => console.log(err));
})

apiRouter.delete('/notes/:id', (req, res) => {
    console.log(`${req.params} is deleting`);
    readNotes('Develop/db/db.json', 'utf-8')
        .then(data => {
            const notesArray = JSON.parse(data);
            const delArray = notesArray.filter(note => note.id != req.params.id);
            writeNotes('Develop/db/db.json', JSON.stringify(delArray));
            return res.json(delArray);
        })
        .catch(err => console.log(err));
})

module.exports = apiRouter;
