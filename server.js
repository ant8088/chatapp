const express = require('express');
const http = require('http');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app); 
const io = socketio(server);

app.use(express.static('public'));

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const path = require('path');


io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on("chat message", (data) => {
    console.log(`${data.user}: ${data.message}`);
    io.emit("chat message", data); // Broadcast to all clients
  });


  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

