/**
 * Created by todd.kim on 2017-06-01.
 */

var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.json({
        title : 'Fante\'s Room'
    });
});

router.get('/list', function (req, res) {
    res.json({
        items : global.blog_realm.objects('POST').sorted('timestamp', true)
    });
});

router.post('/write', function (req, res) {
    var title = req.body['title'],
        content = req.body['content'],
        timestamp = new Date();

    global.blog_realm.write(function () {
        global.blog_realm.create('POST', {title: title, content: content, timestamp: timestamp});
    });

    res.json({created : timestamp});
});

module.exports = router;