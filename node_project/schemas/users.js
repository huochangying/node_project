/**
 * Created by quauq on 2017/4/20.
 */
var mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    username: String,
    passward: String
});