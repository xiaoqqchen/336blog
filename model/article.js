/**
 * Created by Administrator on 2015/11/13.
 */
var mongoose = require('./db');

var articleSchema = new mongoose.Schema({
    name:String,
    title:String,
    post:String,
    date:Date
});

var Article = mongoose.model('Article',articleSchema);

module.exports = Article;