/**
 * Created by Administrator on 2015/11/13.
 */
var express = require('express');
var router = express.Router();
var User = require('../model/user');

router.get('',function(req,res,next){
    res.render('register',{title:'注册'});
});

router.post('',function(req,res,next){
    User.findOne({name:req.body.name},function(err,user){
        if(user){
            res.render('login',{
                title:'用户名已存在！'
            });
            return;
        }
        User.create({
            name:req.body.name,
            password:req.body.password,
            email:req.body.email
        },function(err,data){
            console.log(data);
        });
        req.session.user = user;
        res.redirect('/');
        /*        res.render('',{
         title:'登录成功！',
         user:req.session.user
         });*/
    });

});

module.exports = router;