/**
 * Created by Administrator on 2015/11/13.
 */
var express = require('express');
var User = require('../model/user');
var router = express.Router();

router.get('',function(req,res,next){
    req.session.user = null;
    res.redirect('/login');
});

module.exports = router;