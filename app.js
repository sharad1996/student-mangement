var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cors = require('cors');

var userRoutes = require('./routes/api-user');
var app = express();
const connect = require('./dbconfig');

connect();
app.options('*', cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: '5mb' }))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.use('/api/user', cors('*'), userRoutes);

module.exports = app;
