const path = require("path");
const express = require("express");
const http = require("http");
const socketio = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const port = process.env.PORT || 3000;

const publicDirectoryPath = path.join(__dirname, "../public");

app.use(express.static(publicDirectoryPath));

io.on("connection", (socket) => {
  console.log("New WebSocket Connection");

  socket.emit("message", "Welcome");
  socket.broadcast.emit("message", "New user joined");

  socket.on("send-msg", (msg) => {
    io.emit("message", msg);
  });

  socket.on("disconnect", () => {
    io.emit("message", "A user has left!");
  });

  socket.on("Send-Location", (coords) => {
    io.emit(
      "message",
      `https://google.com/maps?q=${coords.latitude},${coords.longitude}`
    );
  });
});

server.listen(port, () => {
  console.log("Server is Up on " + port + "!");
});
