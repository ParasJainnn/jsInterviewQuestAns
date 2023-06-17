for (var i = 0; i < 4; i++) {
  setTimeout(() => console.log(i), 0)
}

output =>  4
4
4
4

//resons-> this set time out will send the console.log(i) to the queue 
//windows.setTimeout() is considered as a Web APIs (for better Non-Blocking I/O). So the call stack sends this part of code to correct Web APIs. After 0 milliseconds, the callback (here an anonymous function) would be sent to the Queue (not to the call stack).