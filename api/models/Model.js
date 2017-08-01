'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PersonSchema = new Schema({
  Name: {
    type: String,
    Required: 'Kindly enter the name of the person'
  },
  Age  : {
    type: Number,
    Required: 'Kindly enter the age of the person'
  },
  Mobile  : {
    type: Number,
    Required: 'Kindly enter the mobile number of the person'
  },
  Gender: {
    type: [{
      type: String,
      enum: ['male','female']
    }],
  }

});

module.exports = mongoose.model('Person', PersonSchema);