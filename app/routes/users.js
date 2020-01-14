// jshint esversion: 8
// jshint node: true
"use strict";

const express = require('express');
const router = express.Router();
const request = require('request');

const {refreshToken, cookieExtractor} = require('../helper/refreshToken_Client');


router.get('/registrieren', function (req, res){
  res.render('registrierung', {
    title: 'Registrieren'
  });
});


router.post('/registrieren', function (req, res){
  var url = process.env.API_Domain+'/api/v1/user/signup';
  request.post(url, {form: req.body})
    .on('response', function(response) {
      // concatenate updates from datastream
      var body = '';
      response.on('data', function(chunk){
          //console.log("chunk: " + chunk);
          body += chunk;
      });
      response.on('end', function(){
        if(response.statusCode !== 201){
          return res.redirect('/nutzer/registrieren');
          // return res.status(400).send(JSON.parse(body));
        }
        res.redirect('/nutzer/anmelden');
      });
    })
    .on('error', function(err) {
      return res.status(400).send('Fehler');
  });
});


router.get('/anmelden', async function (req, res){
  res.render('loginnew', {
    title: 'Login'
  });
});


router.post('/anmelden', function (req, res){
  var url = process.env.API_Domain+'/api/v1/user/signin';
  console.log(req.body);
  request.post(url, {form: req.body})
    .on('response', function(response) {
      // concatenate updates from datastream
      var body = '';
      response.on('data', function(chunk){
          //console.log("chunk: " + chunk);
          body += chunk;
      });
      response.on('end', function(){
        console.log(body);
        if(response.statusCode !== 200){
          // login not successfully
          req.flash('loginError', JSON.parse(body).message);
          return res.status(400).redirect('/nutzer/anmelden');
        }
        // token is generated
        // set cookies (name: "access" and "refresh") with token as content
        const cookieOptions = {
          httpOnly: true, // the cookie only accessible by the web server
        };
        res.cookie('access', (JSON.parse(body)).token, cookieOptions);
        cookieOptions.maxAge = process.env.COOKIE_MaxAge;
        res.cookie('refresh', (JSON.parse(body)).refreshToken, cookieOptions);
        return res.redirect('/');
      });
    })
    .on('error', function(err) {
      return res.status(400).send('Fehler');
  });
});


router.get('/abmelden', function(req, res){
  var token = cookieExtractor(req, 'access');
  var options = {
    url: process.env.API_Domain+'/api/v1/user/signout',
    headers: {
      'Authorization': 'Bearer '+token
    }
  };
  request.post(options)
    .on('response', function(response) {
      // concatenate updates from datastream
      var body = '';
      response.on('data', function(chunk){
          //console.log("chunk: " + chunk);
          body += chunk;
      });
      response.on('end', function(){
        if(response.statusCode !== 200){
          return refreshToken(req, res, '/nutzer/abmelden');
        }
        res.clearCookie('access');
        res.clearCookie('refresh');
        req.flash('logoutSuccess', JSON.parse(body).message);
        res.redirect('/nutzer/anmelden');
      });
    })
    .on('error', function(err) {
      return res.status(400).send('Fehler');
  });
});



module.exports = router;
