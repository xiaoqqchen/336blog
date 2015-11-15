/**
 * Created by Administrator on 2015/11/13.
 */
/*var mongo = require('mongodb');
var setting = require('../setting');
var Db = mongo.Db;
var Connection = mongo.Connection;
var Server = mongo.Server;
var db = new Db(setting.db,new Server(setting.host,setting.port),{safe:true});

db.open(function(error,dbCon){
    if(error){
        console.log(error);
    }
});*/
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/myblog');

module.exports = mongoose;