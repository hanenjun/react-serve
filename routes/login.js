var express = require('express');
var router = express.Router();
var userM = require('../db/models').user
var md5 = require('blueimp-md5')

/* GET home page. */
router.get('/', function(req, res, next) { 
  let { username,password } = req.query
  userM.findOne({username,password:md5(password)},{password:0,__v:0},(err,doc)  =>{
 
    if(doc){
      res.cookie("userid",doc._id,{maxAge:1000*60*60*24})

        res.send({
            code:0,
            data:{
                doc
            }
        })
    }else{
        res.send({
            code:1,
            msg:"请注册"
          })
    }
  })

});

module.exports = router;