'use strict';
const Node = require('./node');

class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
        this.length = 0;
    }

    isEmpty() {
        if (this.front === null || this.length === 0) {
            return true;
        }
        else {
            return false;
        }

        // return this.front ===null;
        // return this.length ===0;
    }

    enqueue(val) {
        const newNode = new Node(val);
        if (this.isEmpty()) {
            this.front = newNode;
            this.rear = newNode;
            this.length += 1;
        }
        else {
            this.rear.next = newNode;
            this.rear = newNode;
            this.length += 1;
        }
    }

    dequeue() {
        if (this.isEmpty()) {
            return ' can not dequeue the Queue is empty';
        }
        else {

            const temp = this.front;
            this.front = this.front.next;
            temp.next = null;
            this.length -= 1;
            return temp.val;
        }
    }
    peek() {

        if (this.isEmpty()) {
            return "can not peek the queue is empty";
            // return null
        }
        return this.front.val;
    }


}
module.exports = Queue;