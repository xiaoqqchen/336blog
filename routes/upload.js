/**
 * Created by Administrator on 2015/11/14.
 */
var express = require('express');
var router = express.Router();
router.get('',function(req,res){
   res.render('upload',{
     title:"上传",
       user:req.session.user
   });
});

router.post('',function(req,res){
    if ( Object.keys(req.files).length === 0 ) {
        console.log('no files uploaded');
    }else{
        console.log(req.files[0]);
    }
    res.redirect('upload');
});

module.exports = router;