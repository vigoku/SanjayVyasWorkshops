class Stack<T>{
    private array: T[] = [];
    private top = -1;
    constructor() {

    }

    push(value: T) {
        this.array.push(value);
        this.top++;
    }

    pop(): T {
        if (this.top == -1) throw new Error("Empty Stack");
        return (this.array[this.top--]);
    }
}

const st = new Stack<number>;
st.push(1);
st.push(2.1);
st.push(5);

console.log(st.pop());
console.log(st.pop());
console.log(st.pop());
try {
    console.log(st.pop());
} catch (ex : any) {
    console.log(ex.message);
}
