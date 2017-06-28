var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var cors = require('cors');

var app = express();

var realm = require('realm');
var index = require('./routes/index');

var post_schema = {
    name : 'POST',
    properties : {
        timestamp : 'date',
        title : 'string',
        content : 'string',
        width : {type : 'string', default : '350'},
        height : {type : 'string', default : '250'}
    }
};

var user_schema = {
    name : 'USER_PROFILE',
    properties : {
        id : 'string',
        first_name : 'string',
        last_name : 'string',
        gender : 'string',
        email : 'string',
        introduce : 'string'
    }
};


global.blog_realm = new Realm({
    path : 'blog.realm',
    schema : [post_schema, user_schema],
    schemaVersion : 1,
    migration : function(oldRealm, newRealm) {
        // schemaVersion을 1로 업데이트하는 경우만 이 변경을 적용합니다
        if (oldRealm.schemaVersion < 1) {
            // 스키마 데이터 업데이트 작업

            //var oldObjects = oldRealm.objects('Person');
            //var newObjects = newRealm.objects('Person');

            // 모든 객체를 순환하며 새 스키마의 name 속성을 설정합니다
            //for (var i = 0; i < oldObjects.length; i++) {
            //    newObjects[i].name = oldObjects[i].firstName + ' ' + oldObjects[i].lastName;
            //}
        }
    }
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());

app.use('/', index);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
