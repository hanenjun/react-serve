var express = require('express');
var router = express.Router();
var userM = require('../db/models').user
var md5 = require('blueimp-md5')

/* GET home page. */
router.get('/', function(req, res, next) { 
    let {type} = req.query;
    console.log(req.query)
    let data;
    if(type === 'laoban'){
        userM.find({type:'dashen'},{password:0},(err,data)=>{
           if(!err){
            res.send({
                code:0,
                data
            })
           }else{
            res.send({
                code:1,
                msg:"没有相关用户"
            })
           }
        })
    }else if(type === 'dashen'){
       
         userM.find({type:'laoban'},{password:0},(err,data)=>{
            if(!err){
                res.send({
                    code:0,
                    data
                })
               }else{
                res.send({
                    code:1,
                    msg:"没有相关用户"
                })
               }
        })
    }else{
        res.send({
            code:1,
            msg:"请求类型错误"
        })
    }

});

module.exports = router;
