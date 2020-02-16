const createError = require('http-errors');
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors')
var multer = require('multer');
var upload = multer();

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');

const todoRoutes = require('./routes/todoRoutes');

const app = express();

// Body parser, reading data from body into req.body
app.use(cors());  //enable cors

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(upload.array()); 

app.use('/api/v1/todo', todoRoutes);

if(process.env.NODE_ENV === 'development') { /*production*/ }
app.use(express.static(__dirname + '/public/')); // Public Vue.js files
app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html')); // Handle SPA of Vue.js URL

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;


//https://thawing-retreat-49929.herokuapp.com/