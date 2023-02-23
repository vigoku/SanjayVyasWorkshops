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

    insertAfter(refValue, insertValue) {
        let current = this.head;
        while (current != null && current.value != refValue)
            current = current.next;
        if (current != null) {
            const spot = new Node(insertValue);
            spot.prev = current;
            spot.next = current.next;
            if (current.next != null)
                current.next.prev = spot;
            else //tail
                this.tail = spot;
            current.next = spot;
        } else
            console.log("Element Not Found", refValue);
    }

    insertBefore(refValue, insertValue) {
        let current = this.tail;
        while (current != null && current.value != refValue)
            current = current.prev;
        if (current != null) {
            const spot = new Node(insertValue);
            spot.prev = current.prev;
            spot.next = current;

            if (current.prev != null)
                current.prev.next = spot;
            else
                this.head = spot;
            current.prev = spot;
        } else
            console.log("Element Not Found", refValue);
    }

    removeValue(value) {
        let current = this.head;
        while (current != null && current.value != value)
            current = current.next;

        if (current != null) {
            console.log('removing : ', value);
            if (current.next != null) {
                current.next.prev = current.prev;
            } else {
                this.tail = this.tail.prev;
            }
            if (current.prev != null) {
                current.prev.next = current.next;
            } else {
                this.head = this.head.next;
            }
            current.next = null;
            current.prev = null;
        } else
            console.log("Element Not Found", value);
    }
}

const ll = new LinkedList();
ll.add(1);
console.log('insert 2');
ll.insertAfter(1,2);
ll.add(3);
console.log('insert 4');
ll.insertAfter(3, 4);
ll.printForwards();
ll.add(5);
ll.add(7);

console.log('insert 6');
ll.insertBefore(7, 6);
ll.insertAfter(7,8); // tail testing
ll.insertBefore(1,0); // head testing

ll.printForwards();
ll.printBackwards();

ll.removeValue(3);
ll.printForwards();
ll.printBackwards();

ll.removeValue(1);
ll.printForwards();
ll.printBackwards();

ll.removeValue(5);
ll.printForwards();
ll.printBackwards();

ll.removeValue(7);
ll.printForwards();
ll.printBackwards();