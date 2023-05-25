// contains head, tail, and length for a sequence of data.

import logObject from '../utils/logObject.js';

// get = get node with index.
// set = update node value with index.
// insert = create a new node at specific position
// push = push a new node at the end.
// pop = remove node from the end.
// shift = remove node from the start
// unshift = create a new node at the start
// reverse = reverse the list

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
      // this.head.next = this.tail;
      this.length++;
      return this;
    }
    let tempTail = this.tail;
    this.tail = newNode;
    tempTail.next = this.tail;
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || !this.length || index > this.length) return null;
    if (this.length === 1) return this.head;
    let currentNode = this.head;
    let counter = 0;
    while (counter <= index) {
      if (currentNode) {
        currentNode = currentNode.next;
      }
    }
    return currentNode;
  }
  pop() {
    if (!this.length) return false;
  }
}

let list = new LinkedList();
list.push('Hi');
list.push('Hello');
list.push('How');
logObject(list.get(2));
// logObject(list);
