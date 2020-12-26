// Node.js socket client script
const net = require('net');
// Connect to server on Port 3007
const client = net.createConnection({ port: 3007 }, () => {
  console.log('C: I connected to the server.');
  client.write('C: Hello this is client!');
});
let intervalStarted = false;
client.on('data', (data) => {
    data &&  console.log(data.toString());
    if(!intervalStarted){
      sendMessageToServerInIntervale();
      intervalStarted = true;
    }
});
client.on('end', () => {
  console.log('C: I disconnected from the server.');
});

const sendMessageToServerInIntervale = () => {
  let counter = 0;
  const intervalId = setInterval(() => {
    client.write(`C: Hello Server ${counter}!`);
    if (counter > 10) {
      clearInterval(intervalId);
      client.end();
    }
    counter++;
  }, 3000);
};