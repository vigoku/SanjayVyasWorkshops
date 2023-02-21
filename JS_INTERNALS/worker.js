function longRun(ms){
    const start = new Date;
    while (new Date - start < ms)
    ;
}

onmessage = function(message){
    console.log("worker started" , message.data);
    longRun(message.data);
    this.postMessage("done");
} 