"use strict";
const Node = require("./node");

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      return this;
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = newNode;
      return this;
    }
  }
  
  printAll(){
    let currNode = this.head;
    while(currNode != null){
        console.log(currNode.value);
        currNode = currNode.next;
    }
  }
  insert(value){
    const newNode = new Node(value);
    let tempHead = this.head;
    this.head = newNode;
    this.head.next = tempHead;
}

includes(value){
  let currNode = this.head;
  let check = false;
  while(currNode != null){
      let currValue = currNode.value;
      if(currValue === value){
          check = true;
      }
      currNode = currNode.next;
  }

  return check;
}



}

const ll = new LinkedList();
ll.append(7);
ll.append(9);
ll.insert(5);
ll.insert(0);
ll.printAll();