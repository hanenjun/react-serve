var express = require('express');
var router = express.Router();
var md5 = require('blueimp-md5')
var userM = require('../db/models').user

/* GET home page. */
router.post('/', function(req, res, next) { 

    let user =req.body
    console.log(user)
    let userid = req.cookies.userid
    if(!userid){
        return res.send({code:1,msg:"请先登入"})
    }
    userM.findByIdAndUpdate({_id:userid},{...user},(err,oldUser)=>{
        if(!oldUser){
            res.clearCookie('userid')
        return res.send({code:1,msg:"请先登入"})
        }else{
            let {username,_id,type} = oldUser
            let data = Object.assign(user,{username,_id,type})
            console.log(data)
            res.send({code:0,data})
        
        }
    })
});


module.exports = router;
