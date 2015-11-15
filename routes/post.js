/**
 * Created by Administrator on 2015/11/13.
 */
var express = require('express');
var Article = require('../model/article');
var router = express.Router();

/* GET home page. */
router.get('',function (req, res, next) {
    if (!req.session.user) {
        res.redirect('/login');
    }
    next();
});
router.get('', function(req, res, next) {
    res.render('post',{
        'title':'提交',
        user:req.session.user
    });
});

router.post('', function(req, res, next) {
    var date = new Date();
    Article.create({
        title:req.body.title,
        post:req.body.post,
        date:date,
        name:req.session.user.name
    },function(err,data){
        console.log(data);
    });
    res.redirect('post');
});



module.exports = router;