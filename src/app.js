const express = require('express');
const path = require('path');
const bodyParser =require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const api = require('./routes/api');




const app = express();
const port = 3000;


app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'client')));

app.use('/api', api);
app.get('/', (req, res) => {
    res.send('Invalid Endpoint');
});


app.listen(port, () => {
    console.log('server running....')
});