var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var multer  = require('multer');


var routes = require('./routes/index');
var users = require('./routes/users');
var login = require('./routes/login');
var register = require('./routes/register');
var about = require('./routes/about');
var logout = require('./routes/logout');
var post = require('./routes/post');
var upload = require('./routes/upload');
var chat = require('./routes/chat');


var setting = require('./setting');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
    secret: setting.cookieSecret,
  resave: true,
  saveUninitialized: true
}));
app.use(multer({
  dest: '../public/uploadImages/',
    rename: function (fieldname, filename) {
        return filename;
    }
}));

app.use('/', routes);
app.use('/users', users);
app.use('/login',login);
app.use('/register',register);
app.use('/about',about);
app.use('/logout',logout);
app.use('/post',post);
app.use('/upload',upload);
app.use('/chat',chat);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      title:'Error',
      message: err.message,
      error: err,
      user:req.session.user
    });
  });
}



// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
