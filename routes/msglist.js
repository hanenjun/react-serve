var express = require('express');
var router = express.Router();
var {user,chat} = require('../db/models')
var md5 = require('blueimp-md5')

/* GET home page. */
router.get('/', function(req, res, next) { 
  
    const from = req.body.from
    const to = req.cookies.userid
   user.find(function(err,userDocs){
       const users = {}
       userDocs.forEach(doc=>{
           users[doc._id] = {username:doc.username,header:doc.reader}
       })
       chat.find({'$or':[{from:userid},{to:userid}]},{password:0},function(err,chatDocs){
           res.send({code:0,data:{users,chatDocs}})
       })
   })
});

module.exports = router;
