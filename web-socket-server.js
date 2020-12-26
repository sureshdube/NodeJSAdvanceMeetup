// Node.js socket server script
const net = require('net');
// Create a server object
const server = net.createServer((socket) => {
  let intervalStarted = false;
  socket.on('data', (data) => {
    console.log(data.toString());
    if(!intervalStarted){
      sendMessageToServerInIntervale(socket);
      intervalStarted = true;
    }
  });
  socket.write('S: Hello! This is server speaking. Test websocket<br>');
}).on('error', (err) => {
  console.error(err);
});
// Port 3006
server.listen(3007, () => {
  console.log('opened server on', server.address().port);
});

const sendMessageToServerInIntervale = (socket) => {
  let counter = 0;
  const intervalId = setInterval(() => {
    socket.write(`C: Hello Client ${counter}!`);
    if (counter > 10) {
      clearInterval(counter);
      socket.end('S: Closing connection now.<br>');
    }
    counter++;
  }, 2500);
};