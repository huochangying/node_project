/**
 * Created by quauq on 2017/4/19.
 */
var express = require('express');
//模板处理模块
var swig = require('swig');
//加载数据库
var mongoose=require('mongoose');
//处理post提交的数据
var bodyParser=require('body-parser');
//创建app应用
var app = express();

//设置静态文件托管
//当用户访问的url以/public开始，那么直接返回对应__dirname+'/public'下的文件
app.use('/public', express.static(__dirname + '/public'));

// 配置应用模板
// 定义当前应用所使用的模板引擎
// 第一个参数：模板引擎的名称，同时也是模板文件的后缀，第二个参数表示用于解析处理模板内容的方法
app.engine('html', swig.renderFile);
// 设置模板文件的存放目录，第一个参数必须是views，第二个参数是目录
app.set('views', './views');
//注册所使用的的模板引擎，第一个参数必须是 view engine ,第二个参数和app.engine这个方法中定义的模板引擎名称（第一个参数）是一样的
app.set('view engine', 'html');

swig.setDefaults({cache: false});

// app.get('/public', function (req, res, next) {
//     //默认读取views目录下的文件，解析返回给客户端
//     res.render('index')
// });

//body-parser设置
app.use(bodyParser.urlencoded({extended:true}));

/**
 * 根据不同的功能划分模块
 */
app.use('/admin', require('./routers/admin'));
app.use('/api',require('./routers/api'));
app.use('/',require('./routers/main'));

mongoose.connect('mongodb://localhost:27018/hello',function (err) {
    if(err){
        console.log('链接失败')
    }else{
        console.log('连接成功');
        app.listen(8088);
    }
});


