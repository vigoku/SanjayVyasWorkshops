class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None
        self.tail = None
    def add(self, value):
        spot = Node(value)

        if self.head == None :
            self.head = spot
        else :
            self.tail.next = spot
        
        self.tail = spot
    
    def print (self) : 
        current = self.head
        while current is not None :
            print(current.value)
            current = current.next

sll = LinkedList()
sll.add(1)
sll.add(10)
sll.add(300)

sll.print()

