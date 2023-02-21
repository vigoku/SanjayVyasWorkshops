class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    add(value) {
        const spot = new Node(value);
        if (this.head == null) {
            this.head = spot;
        } else {
            spot.prev = this.tail;
            this.tail.next = spot;
        }

        this.tail = spot;
    }
    printForwards() {
        process.stdout.write('|- ');
        let current = this.head;
        while (current != null) {
            process.stdout.write(current.value + ' -> ');
            current = current.next;
        }
        console.log('-|');
    }

    printBackwards() {
        process.stdout.write('|- ');
        let current = this.tail;
        while (current != null) {
            process.stdout.write(current.value + ' -> ');
            current = current.prev;
        }
        console.log('-|');
    }
}

const ll = new LinkedList();
ll.add(1);
ll.add(10);
ll.add(100);

ll.printForwards();
ll.printBackwards();