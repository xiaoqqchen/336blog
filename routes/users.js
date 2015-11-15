var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('user',{
    title:"用户",
    user:req.session.user
  });
});

module.exports = router;
