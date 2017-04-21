/**
 * Created by quauq on 2017/4/20.
 */
var express = require('express');

var router = express.Router();

router.post('/user/register', function (req, res, next) {
    console.log(req.body);
});

module.exports = router;