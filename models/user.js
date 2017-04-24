// get an instance of mongoose and mongoose.Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//export the model base on the schema
module.exports = mongoose.model('User', new Schema ({
  fname: String,
  lname: String,
  online: Boolean,
  //runs: [{start: String, end: String, dist: Number, time: Number, date: Date }],
  //groups: [{number: Number}]

}));
