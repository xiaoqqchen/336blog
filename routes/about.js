/**
 * Created by Administrator on 2015/11/13.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('about',{
        'title':'关于',
        user:req.session.user
    });
});

module.exports = router;