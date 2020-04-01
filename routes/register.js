var express = require('express');
var router = express.Router();
var md5 = require('blueimp-md5')
var userM = require('../db/models').user

/* GET home page. */
router.post('/', function(req, res, next) { 
  let { username,password,type } = req.body

  userM.findOne({username},(err,doc)  =>{
  console.log("doc")
    if(doc){
      res.send({
        code:1,
        msg:"用户存在"
      })
    }else{

      new userM({
        username,
        password:md5(password),
        type
      }).save((err,user)=>{
        const data =  { username,type,_id:user._id} 
      res.cookie("userid",user._id,{maxAge:1000*60*60*24*7})

        res.send({
          code:0,
          data:{
            ...data
          }
        })
      })
    }
  })

});


module.exports = router;
