var express = require('express');
var router = express.Router();
var Article = require('../model/article');
var markdown = require('markdown').markdown;
var moment = require('moment');

/* GET home page. */
router.get('/', function(req, res, next) {
  Article.find({}).sort('-date').exec(function(err,data){
    data.forEach(function (d) {
      d.post = markdown.toHTML(d.post);
      d.formatDate = moment(d.date).format('YYYY年MM月DD日 HH时mm分');
    });
    res.render('index',{
      title:'主页',
      user:req.session.user,
      articles:data
    });
  });
});

module.exports = router;
