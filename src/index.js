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

let count=1;

io.on("connection", (socket) => {
  console.log("New WebSocket Connection");

  socket.emit("xyz",count)

  socket.on("increment",()=>{
      count++;
      io.emit("xyz",count)
  })
});

server.listen(port, () => {
  console.log("Server is Up on " + port + "!");
});
