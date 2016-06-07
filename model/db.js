/**
 * Created by Administrator on 2015/11/13.
 */
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/myblog');

module.exports = mongoose;
