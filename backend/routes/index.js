/**
 * Created by todd.kim on 2017-06-01.
 */

var express = require('express');
var uuid = require('uuid/v4');
var router = express.Router();

router.get('/', function (req, res) {
    res.json({
        title : 'Fante\'s Room',
        items : global.blog_realm.objects('POST').sorted('timestamp', true)
    });
});

router.get('/list', function (req, res) {
    res.json({
        items : global.blog_realm.objects('POST').sorted('timestamp', true)
    });
});

router.get('/search/:keyword', function (req, res) {
    var params = req.params.keyword;
    console.log(params);
    res.json({

    });
});

router.post('/write', function (req, res) {
    var title = req.body['title'],
        content = req.body['content'],
        width = req.body['width'],
        height = req.body['height'],
        timestamp = new Date();

    global.blog_realm.write(function () {
        global.blog_realm.create('POST', {title: title, content: content, width: width, height: height, timestamp: timestamp});
    });

    res.json({created : timestamp});
});

module.exports = router;