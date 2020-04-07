var express = require('express');
var router = express.Router();
var userM = require('../db/models').user
var md5 = require('blueimp-md5')

/* GET home page. */
router.post('/', function(req, res, next) { 
  let { username,password } = req.body
  password = md5(password)
  userM.findOne({username,password},{password:0,__v:0},(err,doc)  =>{
    console.log(username,password,doc,err)
    if(doc){
      res.cookie("userid",doc._id,{maxAge:1000*60*60*24})
      console.log("ok")
      console.log("login",doc._doc)
        res.send({
            code:0,
            data:{
              ...doc._doc
            }
        })
    }else{
        res.send({
            code:1,
            msg:"不正确"
          })
    }
  })

});

module.exports = router;
