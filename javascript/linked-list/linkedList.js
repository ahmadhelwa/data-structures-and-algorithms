'use strict';
const Node = require('./node');

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  Insert(value) {
    let newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    }
    else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }
  Includes(value) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }
  ToString() {
    let currentNode = this.head;
    let str = '';
    while (currentNode) {
      str += currentNode.value + ' -> ';
      currentNode = currentNode.next;
    }
    return str;
  }
  Print() {
    let currentNode = this.head;
    while (currentNode) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }
  append(newValue) {
    let newNode = new Node(newValue);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let tempNode = this.head;
      while (tempNode.next) {
        tempNode = tempNode.next;
      }
      tempNode.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }
  insertBefore(value, newValue) {
    let newNode = new Node(newValue);
    let currentNode = this.head;
    let previousNode = null;
    while (currentNode) {
      if (currentNode.value === value) {
        if (previousNode === null) {
          this.head = newNode;
          newNode.next = currentNode;
        } else {
          previousNode.next = newNode;
          newNode.next = currentNode;
        }
        this.length++;
        return;
      }
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
  }
  insertAfter(value, newValue) {
    let newNode = new Node(newValue);
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        newNode.next = currentNode.next;
        currentNode.next = newNode;
        this.length++;
        return;
      }
      currentNode = currentNode.next;
    }
  }
  kthFromEnd(k) {
    let currentNode = this.head;
    let count = 0;
    while (currentNode) {
      count++;
      currentNode = currentNode.next;
    }
    if (k > count) {
      return 'Exception';
    }
    if (k < 1) {
      return 'Exception';
    }
    currentNode = this.head;
    for (let i = 0; i < count - k; i++) {
      currentNode = currentNode.next;
    }
    return currentNode.value;
  }
}
let linkedList = new LinkedList();
linkedList.Print();

module.exports = LinkedList;