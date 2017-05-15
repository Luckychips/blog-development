/**
 * Created by todd.kim on 2017-03-28.
 */
'use strict';

var path = require('path');
var express = require('express');
var express_vue = require('express-vue');
var body_parser = require('body-parser');
var realm = require('realm');

// github
// custom lib's
var app = express();

var post_schema = {
    name : 'POST',
    properties : {
        timestamp : 'date',
        title : 'string',
        content : 'string'
    }
};

var blog_realm = new Realm({
    path : 'blog.realm',
    schema : [post_schema]
});

app.use(body_parser.json());
app.use(body_parser.urlencoded({extended : true}));
app.set('views', '../frontend/views');
app.set('vue', {
    defaultLayout : 'layout'
});
app.engine('vue', express_vue);
app.set('view engine', 'vue');

app.get('/', function (req, res) {
    var posts = blog_realm.objects('POST').sorted('timestamp', true);
    var scope = {
        data : {
            title : 'realm blog',
            items : posts
        }
    };

    res.render('index', scope);
});

app.get('/write', function (req, res) {
    res.render('write');
});

app.post('/write', function (req, res) {
    var title = req.body['title'],
        content = req.body['content'],
        timestamp = new Date();

    blog_realm.write(function () {
        blog_realm.create('POST', {title: title, content: content, timestamp: timestamp});
    });

    res.render('write-complete');
});

app.listen(3000, function () {
   console.log('go');
});