var express = require('express');
var router = express.Router();
var {user,chat} = require('../db/models')
var md5 = require('blueimp-md5')

/* GET home page. */
router.post('/', function(req, res, next) { 
  
    const from = req.body.from //发给谁
    const to = req.cookies.userid //谁发的
    chat.update({from,to,read:false},{read:true},{multi:true},function(err,doc){
        res.send({
            code:0,
            data:doc.nModified
        })
    })
});

module.exports = router;
