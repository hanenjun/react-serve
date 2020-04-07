var express = require('express');
var router = express.Router();
var md5 = require('blueimp-md5')
var userM = require('../db/models').user

/* GET home page. */
router.get('/', function(req, res, next) { 
    const userid = req.cookies.userid;
    if(!userid){
        return res.send({code:1,msg:"请登入"})
    }
    userM.findOne({_id:userid},{password:0},(err,data)=>{
        res.send({
            code:0,
            data:{...data._doc}
        })
    })
});


module.exports = router;
