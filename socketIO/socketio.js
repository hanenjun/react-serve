const {chat} = require('../db/models')
module.exports = function (server) {
    const io = require('socket.io')(server)

    // 监视客户端与服务器的连接
    io.on('connection', function (socket) {
        console.log('有一个客户端连接上了服务器')
        // 绑定监听, 接收客户端发送的消息
        socket.on('sendMsg', function (data) {
            console.log('服务器接收到客户端发送的消息', data);
            const { from, to, content } = data;
            const create_time = Date.now();
            const chat_id = [from, to].sort().join('_');
            //    const {to,from,content} = data
            new chat({to,from,content,chat_id,create_time}).save((err, doc) => {
                if (err) {
                    console.log(err)
                } else {
                    io.emit('receiveMsg', doc)
                }
            })
            // // 处理数据
            // data.name = data.name.toUpperCase()
            // // 服务器向客户端发送消息
            // // socket.emit('receiveMsg', data)
            // io.emit('receiveMsg', data)
            // console.log('服务器向客户端发送消息', data)
        })
    })
}