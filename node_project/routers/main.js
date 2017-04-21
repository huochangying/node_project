/**
 * Created by quauq on 2017/4/20.
 */
var express=require('express');

var router=express.Router();

router.get('/',function (req, res, next) {
    res.render('main/index')
});

module.exports=router;