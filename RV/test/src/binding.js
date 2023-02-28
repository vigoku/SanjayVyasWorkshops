class Test {
    id = 1;
    print(){
        console.log("Printing", this.id)
    }
}

let t = new Test();

// const ref = t.print;
// ref();

const refer = t.print.bind(t);
refer();