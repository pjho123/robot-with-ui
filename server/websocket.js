'use strict';

const server = require('http').createServer();
const io = require('socket.io')(server);

const Websocket = {
    runServer: () => {
        return new Promise((resolve) => {
            io.on('connection', client => {
                client.on('disconnect', () => {
                });
                resolve(true);
            });
            server.listen(3000);
        });
    },
    sendEvent: (data) => {
        if (!data) {
            return;
        }

        io.emit('event', data);
    }
};

module.exports = Websocket;
