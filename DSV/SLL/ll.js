class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }

    print() {
        console.log('-', this.value, '-');
        if (null != this.next) {
            this.next.print();
        }
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    add(value) {
        const spot = new Node(value);
        if (this.head == null)
            this.head = spot;
        else
            this.tail.next = spot;

        this.tail = spot;
    }
    print() {
        process.stdout.write('|- ');
        let current = this.head;
        while (current != null) {
            process.stdout.write(current.value + ' -> ');
            current = current.next;
        }
        console.log('-|');
    }

    printRev(current) {
        if (current != null)
            this.printRev(current.next);
        else
            return;

        console.log(current.value);
    }
}

const ll = new LinkedList();
ll.add(1);
ll.add(10);
ll.add(100);

ll.print();

ll.printRev(ll.head);