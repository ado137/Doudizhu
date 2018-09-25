var express = require('express');
//创建一个express对象
var app = express();

//监听7777端口
//app.listen("7777");

// var userRedis = require("../../redis/userRedis");

//响应json数据
function send(res,ret){
    var str = JSON.stringify(ret);
    res.send(str)
}

var config = null;
exports.start = function(cfg){
    config = cfg;
    //监听7777端口
    app.listen(config.CLIENT_PORT);
    console.log("myaccount server is listening on "+config.CLIENT_PORT);
}

//设置跨域访问
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

  //响应某个特定请求
  app.get('/aaa', function(req, res){
    console.log('aaa进入');
    send(res, 'aaaa');
  });


  app.get('/bbb', function(req, res){
    console.log('bbb进入');
    res.send('欢迎你进入bbb!')
  });