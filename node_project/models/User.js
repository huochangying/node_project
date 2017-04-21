/**
 * Created by quauq on 2017/4/20.
 */
var mongoose = require('mongoose');

var userSchema = require('../schemas/users');

module.exports = mongoose.model('User', userSchema);