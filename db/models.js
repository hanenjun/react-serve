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
    header:{type:String},
    post:{type:String},
    info:{type:String},
    company:{type:String},
    salary:{type:String}
})
const userM = mongoose.model("user",userSchema)

exports.user = userM

const chatSchema = mongoose.Schema({
    from:{type:String,required:true},
    to:{type:String,required:true},
    chat_id:{type:String,required:true},
    content:{type:String,required:true},
    read:{type:Boolean,default:false},
    create_time:{type:Number}
})

const ChatModel = mongoose.model('chat',chatSchema)

exports.chat = ChatModel