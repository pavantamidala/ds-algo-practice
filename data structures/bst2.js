class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}



class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        let node = new Node(value);

        if (!this.root) {
            this.root = node
            return this;
        }
        let current = this.root
        while (true) {
            if (current.value < value) {
                if (!current.left) {
                    current.left = node;
                    return this;
                }
                else {
                    current = current.left
                }
            } else if (current.value > value) {
                if (!current.right) {
                    current.right = node;
                    return this;
                } else {
                    current = current.right
                }
            }
        }
    }
}