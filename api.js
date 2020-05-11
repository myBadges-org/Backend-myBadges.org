// jshint esversion: 8
// jshint node: true
"use strict";

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const api = express();

//reads in configuration from a .env file
require('dotenv').config();

api.use(cors());


api.use(logger('dev'));
api.use(express.json());
// api.use(express.urlencoded({ extended: true, limit: '10mb' }));
api.use(cookieParser());

// api documentation
api.use('/docs', express.static(path.join(__dirname, 'docs')));
// uploaded images
api.use('/media', express.static(path.join(__dirname, 'upload')));

// setup routes
// @see https://medium.com/@sesitamakloe/how-we-structure-our-express-js-routes-58933d02e491
require('./routes')(api);


// catch 404 and forward to error handler
api.use(function(req, res, next) {
  next(createError(404));
});

// error handler
api.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send(err);
});

module.exports = api;
