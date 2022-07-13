
'use strict';
const Queue = require('./lib/PseudoQueue');
const newQueue = new Queue();

console.log("chick if queue is empty befor add any element", newQueue.isEmpty());

newQueue.enqueue(1);
newQueue.enqueue(2);
newQueue.enqueue(3);
newQueue.enqueue(4);
console.log("chick if queue is  empty after add  element", newQueue.isEmpty());

console.log('front =  ', newQueue.peek());


console.log("remove the front element using dequeue function ", newQueue.dequeue());
