'use strict';
const Node = require('./node');

class Stack {
    constructor() {
        this.top = null;
        this.length = 0;
    }

    isEmpty() {
        if (this.top === null) { return true; }
        else { return false; }

        //return this.top === null;
    }

    push(val) {
        let newNode = new Node(val);
        if (this.isEmpty()) {
            this.top = newNode;
            this.length += 1;
        }
        else {
            newNode.next = this.top;
            this.top = newNode;
            this.length += 1;
        }
    }

    pop() {
        if (this.isEmpty()) {
            console.log(" can not pop  the stack is empty");
            //   return false;
            return null;
        }
        else {
            let temp = this.top;
            this.top = this.top.next;
            temp.next = null;
            this.length -= 1;
            return temp.val;

        }
    }
    peek() {
        if (this.isEmpty()) {
            // return 'can not peek no nodes in the stack';
            return null;
        } else {
            return this.top.value;
        }
    }
}
module.exports = Stack;