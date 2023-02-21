// ~! promise is not asynchronous !!!!

// Promise take function with resolve and reject and does then and catch
function longRun(ms) {
    console.log(ms);
    const start = new Date();
    while (new Date - start < ms) {
        ;
    }
}
function executor(resolve, reject){
    longRun(5000);
    resolve("done");
}
var pakka = new Promise(executor); //synchronous

//pakka.then() ==> Success handler -- puts in microtask queuse
// Micro task que takes priority
console.log("Promise Made");