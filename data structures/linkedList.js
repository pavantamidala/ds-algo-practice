class Node{
  constructor(val){
    this.val = val
    this.next = null
  }
}

class LinkedList{
  constructor(){
    this.length=0
    this.head = null 
    this.tail = null
  }
  push(val){
    if(!this.length){
      this.head = new Node(val)
      this.tail = this.head
      this.length++
    }else{
      this.tail.next = new Node(val)
      this.tail = this.tail.next
      this.length++
    }
  }
}

let list = new LinkedList()
list.push('hi')
list.push('how')
console.log(list)



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