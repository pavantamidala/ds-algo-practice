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
        const node = new Node(value);

        let checker = true;
        if(!this.root){
            this.root =node;
            checker = false;
        }
        let current = this.root;
        while(checker){
            if(current.left.value < value){
                if(!current.left){
                    current.left = node;
                    checker = false;
                }else{
                    current = current.left;
                }
            }
            if(current.right.value > value){
                if(!current.right){
                    current.right = node;
                    checker = false;
                }else{
                    current = current.right;
                }
            }

        }
        return this;        

    }
}

