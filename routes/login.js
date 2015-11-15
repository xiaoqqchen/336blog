/**
 * Created by Administrator on 2015/11/13.
 */
var express = require('express');
var User = require('../model/user');
var router = express.Router();

router.get('',function(req,res,next){
    res.render('login',{title:'登录'});
});

router.post('',function(req,res,next){
    User.findOne({name:req.body.name},function(err,user){
        if(!user){
            res.render('login',{
                title:'用户名不存在！'
            });
            return;
        }
        if(user.password != req.body.password){
            res.render('login',{
                title:'密码错误！'
            });
            return;
        }
        req.session.user = user;
        res.redirect('/');
/*        res.render('',{
            title:'登录成功！',
            user:req.session.user
        });*/
    });

});

module.exports = router;