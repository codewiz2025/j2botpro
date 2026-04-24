const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Express configuration
app.get('/', (req, res) => {
    res.send('<h1>Express Server with Socket.io</h1>');
});

// Socket.io configuration
io.on('connection', (socket) => {
    console.log('A user connected');

    // Handle video/voice calls
    socket.on('call user', ({ userToCall, signalData, from, name }) => {
        io.to(userToCall).emit('call user', { signal: signalData, from, name });
    });

    socket.on('end call', (id) => {
        io.to(id).emit('call ended');
    });

    // Messaging
    socket.on('send message', (message) => {
        io.emit('message', { message });
    });

    // Game events
    socket.on('game event', (event) => {
        io.emit('game event', event);
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

// Start the server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
