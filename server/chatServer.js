const chatServer = (io) => {

  console.log("Chat Server Started!");

  io.on('connection', function(socket){
      console.log();
      console.log(`a user connected with id ${socket.conn.id}`);
      socket.emit('chatMessage','hola');
      
      // Receive the message
      socket.on('chatMessage', data => {
          console.log(data)
          console.log("Ho!");
          socket.broadcast.emit('chatMessage',data);
      });
      socket.on('messageTo', data => {
        console.log(data)
        console.log("Ho!");
        socket.broadcast.emit(data.id,data);
        socket.emit(data.myId, data);
    });

  });

};

module.exports = chatServer; 