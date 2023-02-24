class Node {
    constructor(value) {
        this.prev = null;
        this.value = value;
        this.next = null;
    }
}

class SentinelList {
    constructor(...values) {
        this.head = new Node();
        this.tail = new Node();

        this.head.next = this.tail;
        this.tail.prev = this.head;

        this.addToBack(...values);
    }

    add(value) {
        let spot = new Node(value);

        spot.prev = this.tail.prev;
        this.tail.prev = spot;
        spot.prev.next = spot;
        spot.next = this.tail;
    }
    addRelative(beforeNode, spot, afterNode) {
        spot.prev = beforeNode;
        spot.next = afterNode;

        beforeNode.next = spot;
        afterNode.prev = spot;
    }
    printForwards() {
        process.stdout.write('|- ');
        let current = this.head.next;
        while (current != this.tail) {
            process.stdout.write(current.value + ' -> ');
            current = current.next;
        }
        console.log('-|');
    }

    printBackwards() {
        process.stdout.write('|- ');
        let current = this.tail.prev;
        while (current != this.head) {
            process.stdout.write(current.value + ' -> ');
            current = current.prev;
        }
        console.log('-|');
    }

    addAfter(refValue, value) {
        let current = this.findValue(refValue);
        let spot = new Node(value);
        this.addRelative(current, spot, current.next);
    }

    addBefore(refValue, value) {
        let current = this.findValue(refValue);
        let spot = new Node(value);
        this.addRelative(current.prev, spot, current);
    }

    addToFront(...values) {
        values.forEach(value => {
            let spot = new Node(value);

            spot.next = this.head.next;
            spot.prev = this.head;

            spot.prev.next = spot;
            spot.next.prev = spot;
        });
    }

    addToBack(...values) {
        values.forEach(item => {
            let spot = new Node(item);
            spot.next = this.tail;
            spot.prev = this.tail.prev;

            spot.next.prev = spot;
            spot.prev.next = spot;
        });
    }

    delete(...values) {
        values.forEach(value => {
            let current = this.findValue(value);
            current.prev.next = current.next;
            current.next.prev = current.prev;
        });
    }

    findValue(value) {
        let current = this.head.next;
        while (current != this.tail) {
            if (value == current.value) {
                return current;
            }
            current = current.next;
        }
        return null;
    }
    removeAllOccurrences(...values) {
        values.forEach(value => {
            while (null != this.findValue(value)) {
                this.delete(value);
            }
        });
    }
    removeNthOccurance(value, occurrence) {
        let count = 0;
        while (null != this.findValue(value)) {
            count++
            if (occurrence == count) {
                this.delete(value);
                return;
            }
        }

    }
    removeFromBack(...values) {
        values.forEach(value => {
            let current = this.tail.prev;
            while (current != head) {
                if (current.value == value) {
                    current.prev.next = current.next;
                    current.next.prev = current.prev;
                    return;
                }
                current = current.prev;
            }
        });
    }
}

sl = new SentinelList(1, 2, 3, 4, 5)
sl.printForwards();
sl.printBackwards();
// sl.add(0);

// sl.printForwards();
// sl.printBackwards();

// sl.add(1);

// sl.printForwards();
// sl.printBackwards();

// sl.addAfter(0, 0.5);
// sl.printForwards();
// sl.printBackwards();

// sl.addBefore(1, 0.75);
// sl.printForwards();
// sl.printBackwards();

// sl.addAfter(0.75, 2);
// sl.printForwards();
// sl.printBackwards();

// sl.delete(2);
// sl.printForwards();
// sl.printBackwards();

// sl.delete(0);
// sl.delete(1);
// sl.printForwards();
// sl.printBackwards();

// sl.addToFront(0.25);
// sl.addToFront(0);
// sl.addToBack(1);
// sl.printForwards();
// sl.printBackwards();

