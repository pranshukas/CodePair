const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const ACTIONS = require('./src/Actions');

const app = express();

const server = http.createServer(app);
const io = new Server(server);

const userSocketMap = {};

const getAllConnectedClients = (roomId) => {
	return Array.from(io.sockets.adapter.rooms.get(roomId) || []).map((socketId) => {
		return {
			socketId,
			username: userSocketMap[socketId],
		};
	});
};

io.on('connection', (socket) => {
	console.log('Socket Connected', socket.id);

	socket.on(ACTIONS.JOIN, ({ roomId, username }) => {
		socket.join(roomId);
		userSocketMap[username] = roomId;
		const clients = getAllConnectedClients(roomId);

		clients.forEach(({ socketId }) => {
			io.to(socketId).emit(ACTIONS.JOINED, {
				clients,
				username,
				socketId: socket.id,
			});
		});
	});
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
	console.log(`Listening on Port ${PORT}`);
});