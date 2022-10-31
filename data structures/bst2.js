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
            if (value === current.value) return undefined;
            if (current.value < value) {
                if (!current.left) {
                    current.left = node;
                    return this;
                }
                current = current.left
            }
            else {
                if (!current.right) {
                    current.right = node;
                    return this;
                }
                current = current.right
            }
        }
    }

    find(value) {
        if (this.root === null) return false;

        let current = this.root
        let found = false;
        while (current && !found) {
            if (value < current.value) {
                current = current.left
            } else if (value > current.value) {
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }

}


let tree = new BinarySearchTree()

tree.insert(10)
tree.insert(100)
tree.insert(20)
tree.insert(30)
tree.insert(40)

tree.contains(10)