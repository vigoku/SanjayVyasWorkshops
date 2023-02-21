//~! async converts function into returning a promise

function doWork() {
    return new Promise((resolve, reject) => {
        const start = new Date;
        while (new Date - start < 10000)
        ;
        // const worker = new Worker("./worker.js");
        // worker.postMessage(10000);
        // worker.onmessage = function (message){
        //     console.log("Got mesage in main", message)
        // }
        resolve("done");

    })
}

async function doSmthing() {
    //const result = await 42; // Await for any expression
    console.log("Enter Do smthing");
    const result = await doWork(); //! 5. await a function. put into message queue
    //~% Javascript exits and goes to event loop processing

    //! 7. when red message comes back to message queeue
    //~* javascript returns here 
    console.log({result});

}

function doSmthingElse(){
    console.log("something else");
}

doSmthing();

doSmthingElse();