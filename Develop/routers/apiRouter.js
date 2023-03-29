const apiRouter = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const util = require('util');
const fs = require('fs');
const notes = util.promisify(fs.readFile);

apiRouter.get('/notes', (req, res) => {
    console.log(req.method + 'Request sent');
    const readNotes = async () => {
        const files = await notes();
        console.log(files);
    };
    readNotes(notes)
    .then(data => {
        return res.json(data);
    })
    .catch(err => console.error(err));
})

apiRouter.post('/notes', (req, res) => {
    console.log('New Note Recieved' + req.body);
    const { title, text } = req.body;
    if(req.body){
        let newNote = {
            title,
            text,
            id: uuidv4(),
        }
        console.log('Note is reciebed');
      //  res.json('Note is recieved');
        notes.push(newNote);
    } else {
        console.log('Note has not been recieved');
       // res.json('Note has not been recieved');
    }
})
//Recieve a query paramter that contains the id of a note to delete, it reads all notes from the db.json file, and removes the note with the given id property and then rewrites the  notes to the db.json file. 
apiRouter.delete('/api/notes/:id', (req, res) => {
    console.log('Deleted note')
  //  const deleted = req.params.id;
   // res.json(deleted);
})


module.exports = apiRouter;
