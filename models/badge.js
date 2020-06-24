// jshint esversion: 6
// jshint node: true
"use strict";

const mongoose = require('mongoose');

//simple schema
const BadgeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    path: {
      type: String
    },
    size: {
      type: Number
    },
    contentType: {
      type: String
    },
    originalName: {
      type: String
    }
  },
  criteria: {
    type: String,
    required: true
  },
  issuer: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }],
  mentor: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }],
  requestor: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }],
  category: {
    type: String,
    required: true,
    enum: ['achievement', 'professional skill', 'meta skill']
  },
  exists: {
    type: Boolean,
    default: true
  }
});


module.exports = mongoose.model('Badge', BadgeSchema);
