const express = require('express');
const app = express();
const apiRouter = require('./Develop/routers/apiRouter');
const htmlRouter = require('./Develop/routers/htmlRouter');

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('Develop/public'));

app.use('/api', apiRouter);
app.use('/', htmlRouter);

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`)
});