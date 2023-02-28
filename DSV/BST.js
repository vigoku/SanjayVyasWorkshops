class Node {
    constructor(value) {
        this.left = null;
        this.value = value;
        this.right = null;
    }
}

class Tree {
    root = null;
    addNode(node, value){
        if (null == node)
            return new Node(value);

        // if value greater than node 
        if (value > node.value){
            node.right = this.addNode(node.right, value);
        }
        //else if value lesser than nodde
        else {
            node.left = this.addNode(node.left, value);
        }
        return node;
    }
    printAscending(node){
        if (node == null) return;
        if (node.left != null) this.printAscending(node.left);
        console.log(node.value);
        if (node.right != null) this.printAscending(node.right);
    }
    printDescending(node){
        if (node == null) return;
        if (node.right != null) this.printDescending(node.right);

        console.log(node.value);

        if (node.left != null) this.printDescending(node.left);
    }
    printLevel(node){
        if (node == null) return;
        console.log(node.value);
        if (node.left != null) this.printLevel(node.left);
        if (node.right != null) this.printLevel(node.right);
    }
}

const ped=new Tree();
ped.root = ped.addNode(ped.root, 1);
ped.root = ped.addNode(ped.root, 2);
ped.root = ped.addNode(ped.root, 3);
ped.root = ped.addNode(ped.root, 4);
ped.root = ped.addNode(ped.root, 5);
ped.root = ped.addNode(ped.root, 6);
ped.root = ped.addNode(ped.root, 7);
ped.root = ped.addNode(ped.root, 8);

console.log("Ascending Order");
ped.printAscending(ped.root);

console.log("Descending Order");
ped.printDescending(ped.root);


console.log("Level Order");
ped.printLevel(ped.root);

console.log(JSON.stringify(ped.root, null, 4));