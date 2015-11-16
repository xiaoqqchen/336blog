/**
 * Created by Administrator on 2015/11/15.
 */
var express = require('express');
var setting = require('../setting');
var router = express.Router();

router.get('',function (req, res, next) {
    if (!req.session.user) {
        res.redirect('/login');
    }
    next();
});
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('chat',{
        'title':'聊天室',
        user:req.session.user,
        socketUrl:setting
    });
});

module.exports = router;