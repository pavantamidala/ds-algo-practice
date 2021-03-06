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
    //special case when length is 1
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if (!this.length) {
      return undefined;
    }
    let formerHead = this.head;
    let newHead = this.head.next;
    this.head = newHead;
    this.length--;
    if (this.length === 0) {
      // this.head = null;
      this.tail = null;
    }
    return formerHead;
  }

  unshift(val) {
    let node = new Node(val);
    if (!this.length) {
      this.head = node;
      this.tail = node;
      this.length++;
      return;
    }
    node.next = this.head;
    this.head = node;
    this.length++;
    return this;
  }
}

let list = new LinkedList();
// list.push('hi');
// list.push('how');
// list.push('are');
list.unshift('hell');
// console.info(list.shift())
// list.pop()
console.log(list);
// let val = list.pop();
// console.log(val);
// console.log(list.length);

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
