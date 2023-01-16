const io = require("socket.io")(8080, {
  cors: {
    origin: "*",
  },
});

let activeUser = [];

io.on("connection", (socket) => {
  // ADD NEW USER
  // WE USE ON WHEN WE HAVE TO TAKE SOMETHING FROM OTHER SIDE...
  socket.on("new-user-add", (newUserId) => {
    if (!activeUser.some((user) => user.userId === newUserId)) {
      activeUser.push({
        userId: newUserId,
        socketId: socket.id,
      });
    }
    // WE USE EMIT WHEN WE HAVE TO SEND SOMETHING TO OTHERSIDE....
    io.emit("get-users", activeUser);
  });
  //   DISCONNECT FUNCTION HAS TO BE STARTED FROM HERE
  socket.on("disconnect", () => {
    activeUser = activeUser.filter((users) => users.socketId !== socket.id);
    io.emit("get-users", activeUser);
  });
});
