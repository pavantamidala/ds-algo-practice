// import util from 'util';
import logObject from '../utils/logObject.js';
// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// class LinkedList {
//   constructor() {
//     this.length = 0;
//     this.head = null;
//     this.tail = null;
//   }
//   push(val) {
//     if (!this.length) {
//       this.head = new Node(val);
//       this.tail = this.head;
//       this.length++;
//     } else {
//       this.tail.next = new Node(val);
//       this.tail = this.tail.next;
//       this.length++;
//     }
//   }

//   pop() {
//     if (!this.length) {
//       return undefined;
//     }
//     let current = this.head;
//     let newTail = this.head;
//     while (current.next) {
//       newTail = current;
//       current = current.next;
//     }
//     console.log(current.val);
//     console.log(newTail.val);
//     this.tail = newTail;
//     this.length--;
//     //special case when length is 1
//     if (this.length === 0) {
//       this.head = null;
//       this.tail = null;
//     }
//     return current;
//   }

//   shift() {
//     if (!this.length) {
//       return undefined;
//     }
//     let formerHead = this.head;
//     let newHead = this.head.next;
//     this.head = newHead;
//     this.length--;
//     if (this.length === 0) {
//       // this.head = null;
//       this.tail = null;
//     }
//     return formerHead;
//   }

//   unshift(val) {
//     let node = new Node(val);
//     if (!this.length) {
//       this.head = node;
//       this.tail = node;
//       this.length++;
//       return;
//     }
//     node.next = this.head;
//     this.head = node;
//     this.length++;
//     return this;
//   }
// }

// let list = new LinkedList();
// // list.push('hi');
// // list.push('how');
// // list.push('are');
// list.unshift('hell');
// // console.info(list.shift())
// // list.pop()
// console.log(list);
// // let val = list.pop();
// // console.log(val);
// // console.log(list.length);

// //original solution

// // class Node{
// //   constructor(val){
// //       this.val = val;
// //       this.next = null;
// //   }
// // }

// // class SinglyLinkedList{
// //   constructor(){
// //       this.head = null;
// //       this.tail = null;
// //       this.length = 0;
// //   }
// //   push(val){
// //       var newNode = new Node(val);
// //       if(!this.head){
// //           this.head = newNode;
// //           this.tail = this.head;
// //       } else {
// //           this.tail.next = newNode;
// //           this.tail = newNode;
// //       }
// //       this.length++;
// //       return this;
// //   }
// // }

// // var list = new SinglyLinkedList()
// // list.push("hi")
// // list.push("how")
// // console.log(list)

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);

    if (!this.length) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      // this.head.next = this.tail;
      this.tail = this.tail.next;
    }
    this.length++;
    return this;
  }

  pop() {
    let current = this.head;
    let newTail = this.head;

    if (!this.head) {
      return undefined;
    }

    while (current) {
      if (!current.next) {
        // console.log(newTail);
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
      } else {
        newTail = current;
      }
      current = current.next;
      // return previous;
    }
    return newTail;
  }
  shift() {
    if (!this.head) return undefined;
    let temp = this.head;
    this.head = temp.next;
    this.length--;
    return temp;
  }
  unshift(val) {
    let newNode = new Node(val);
    let oldHead = this.head;
    this.head = newNode;
    this.head.next = oldHead;
    this.length++;
    return this;
  }
  get(index) {
    let counter = 0;
    let currentNode = this.head;
    if (index < 0 || index > this.length) return null;
    while (currentNode) {
      if (counter === index) {
        return currentNode;
      }
      counter++;
      currentNode = currentNode.next;
    }
  }
  set(index, value) {
    let node = this.get(index);
    if (!node) return false;
    node.value = value;
    return true;
  }
  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) {
      this.unshift(value);
      return true;
    }
    if (index === this.length) {
      this.push(value);
      return true;
    }
    let newNode = new Node(value);
    let preNode = this.get(index - 1);
    let postNode = this.get(index);
    preNode.next = newNode;
    newNode.next = postNode;
    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index > this.length) return undefined;
    if (index === this.length - 1) this.pop();
    if (index === 0) this.shift();
    let preNode = this.get(index - 1);
    let postNode = this.get(index + 1);
    preNode.next = postNode;
    this.length--;
    return true;
  }
}

let list = new LinkedList();
list.push('Hi');
list.push('Hello');
list.push('there');
list.push('How');
list.remove(1);
// list.insert(2, 'pavan');
// list.insert(10, 'k');
// list.push('are');
// logObject(list.get(4));
// list.set(0, 'welcome');
// list.pop();
// logObject(list.shift());
// list.unshift('pk');
// console.log(list);
logObject(list);
