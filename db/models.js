const mongoose  = require('mongoose')
const md5 = require('blueimp-md5')
mongoose.connect('mongodb://localhost:27017/zhipinuser')
const con = mongoose.connection
con.on("connected",()=>{
    console.log("db ok")
})
const userSchema = mongoose.Schema({
    username:{type:String,require:true},
    password:{type:String,require:true},
    type:{type:String,require:true},
    header:{type:String}
})
const userM = mongoose.model("user",userSchema)

exports.user = userM