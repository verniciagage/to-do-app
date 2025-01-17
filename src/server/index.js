const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');


// Controllers
const createController = require('./controllers/createController');
const readController = require('./controllers/readController');
const updateController = require('./controllers/updateController');
const deleteController = require('./controllers/deleteController');


const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Controllers
app.use('/create', createController);
app.use('/read', readController);
app.use('/update', updateController);
app.use('/delete', deleteController);

app.use(express.static('../client/'))

app.get('/healthcheck', (req, res) => {
    res.send('App is healthy and running');
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '/client/pages/index.html'));
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
});