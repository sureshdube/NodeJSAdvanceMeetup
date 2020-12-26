const { Worker, isMainThread, parentPort,workerData } = require('worker_threads');
if (isMainThread) {
  // This code is executed in the main thread and not in the worker.
  // Create the worker.
  const worker = new Worker(__filename,{workerData: "worker data1"});
  // Listen for messages from the worker and print them.
  console.time('Main Thread');
  for(let i= 0;i++; i< 20000000000000){
    for(let j= 0;j++; j< 20000000000000){
      console.log(`Test1:${i}`);
    }
  }
  console.timeEnd('Main Thread');
  worker.on('message', (msg) => { console.log(msg);});
} else {
    console.log(`Printing worker data : ${workerData}`); 
  // This code is executed in the worker and not in the main thread.
  console.time('Worker');
  for(let i= 0;i++; i< 20000000000000){
    for(let j= 0;j++; j< 20000000000000){
    console.log(`Test2:${i}`);
    }
}
  console.timeEnd('Worker');
  // Send a message to the main thread.
  parentPort.postMessage('Done');
}