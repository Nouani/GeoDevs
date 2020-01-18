const socketio = require('socket.io');

exports.setupWebSocket = (server) => {
    const io = socketio(server);

    io.on('connection', socket => {
        console.log(socket.id);
        console.log(socket.handshake.query);

        setTimeout(() => {
            socket.emit('message', 'Hello Omnistack')
        }, 3000)
    });
};