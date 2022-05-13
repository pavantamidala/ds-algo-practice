class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  push(val) {
    if (!this.length) {
      this.head = new Node(val);
      this.tail = this.head;
      this.length++;
    } else {
      this.tail.next = new Node(val);
      this.tail = this.tail.next;
      this.length++;
    }
  }

  pop() {
    if (!this.length) {
      return undefined;
    }
    let current = this.head;
    let newTail = this.head;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    console.log(current.val);
    console.log(newTail.val);
    this.tail = newTail;
    this.length--;
    return current;
  }
}

let list = new LinkedList();
list.push('hi');
list.push('how');
list.push('are');
// console.log(list)
let val = list.pop();
console.log(val);
console.log(list.length);

//original solution

// class Node{
//   constructor(val){
//       this.val = val;
//       this.next = null;
//   }
// }

// class SinglyLinkedList{
//   constructor(){
//       this.head = null;
//       this.tail = null;
//       this.length = 0;
//   }
//   push(val){
//       var newNode = new Node(val);
//       if(!this.head){
//           this.head = newNode;
//           this.tail = this.head;
//       } else {
//           this.tail.next = newNode;
//           this.tail = newNode;
//       }
//       this.length++;
//       return this;
//   }
// }

// var list = new SinglyLinkedList()
// list.push("hi")
// list.push("how")
// console.log(list)
