class Node {
    constructor(value) {
        this.left = null;
        this.value = value;
        this.right = null;
    }
}

class Tree {
    root = null;
    level = 0;
    addNode(node, value) {
        if (null == node)
            return new Node(value);

        // if value greater than node 
        if (value > node.value) {
            node.right = this.addNode(node.right, value);
        }
        //else if value lesser than nodde
        else {
            node.left = this.addNode(node.left, value);
        }
        return node;
    }
    printAscending(node) {
        if (node == null) return;
        if (node.left != null) this.printAscending(node.left);
        console.log(node.value);
        if (node.right != null) this.printAscending(node.right);
    }
    printDescending(node) {
        if (node == null) return;
        if (node.right != null) this.printDescending(node.right);

        console.log(node.value);

        if (node.left != null) this.printDescending(node.left);
    }

    //Insertion algo
    printLevel(node) {
        if (node == null) return;
        console.log(node.value);
        if (node.left != null) this.printLevel(node.left);
        if (node.right != null) this.printLevel(node.right);
    }
    // deletion algo
    printPostOrder(node) {
        if (node == null) return;
        if (node.left != null) this.printLevel(node.left);
        if (node.right != null) this.printLevel(node.right);
        console.log(node.value);
    }

    removeNode(node, value) {
        if (node == null) {
            return null;
        }
        if (value > node.value) {
            node.right = this.removeNode(node.right, value);
        } else if (value < node.value) {
            node.left = this.removeNode(node.left, value);
        } else {
            //match 
            // if (node.right == null && node.left == null) {
            //     return null;
            // }
            // no right child
            // if (node.right == null && node.left != null) // return left
            //     return node.left;

            //no left child
            // if (node.left == null && node.right != null) // return right
            //     return node.right;

            // both null, null
            // 
            if (node.right == null ||  node.left == null)
                return node.right ?? node.left;

            // Both Child
            

            // find successor Shift right.. then keep going left. 
            // let successor = node.right;
            // while (successor.left != null){
            //     successor = successor.left;
            // }
            // node.value = successor.value;
            // node.right = this.removeNode(node.right, successor.value);
            //find predecessor , first left then keep goind right till dead end.
            let predecessor = node.left;
            while (predecessor.right != null){
                predecessor= predecessor.right;
            }
            node.value = predecessor.value;
            node.left = this.removeNode(node.left, predecessor.value);
        }
        return node;
    }
    printTree(node) {
        if (node) {
            this.level++;
            this.printTree(node.right);
            console.log(" ".repeat(this.level * 4), node.value);
            this.printTree(node.left);
            this.level--;
        }
    }

}

const ped = new Tree();
ped.root = ped.addNode(ped.root, 5);
ped.root = ped.addNode(ped.root, 4);
ped.root = ped.addNode(ped.root, 7);
ped.root = ped.addNode(ped.root, 6);

 ped.root = ped.addNode(ped.root, 8);
// ped.root = ped.addNode(ped.root, 1);
// ped.root = ped.addNode(ped.root, 2);
//ped.root = ped.addNode(ped.root, 3);



console.log("Ascending Order");
//  ped.printAscending(ped.root);

console.log("Descending Order");
//ped.printDescending(ped.root);

console.log("Level Order");
//ped.printLevel(ped.root);

//console.log(JSON.stringify(ped.root, null, 4));

ped.printTree(ped.root);
//ped.printAscending(ped.root);
ped.removeNode(ped.root, 5);
//ped.removeNode(ped.root, 6);
console.log ("After Removing");
ped.printTree(ped.root);
//console.log(JSON.stringify(ped.root, null, 4));
ped.printAscending(ped.root);