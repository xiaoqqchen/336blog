/**
 * Created by Administrator on 2015/11/13.
 */

var mongoose = require('./db');

var userSchema = new mongoose.Schema({
   name:String,
    password:String,
    email:String
});

var User = mongoose.model('User',userSchema);

module.exports = User;