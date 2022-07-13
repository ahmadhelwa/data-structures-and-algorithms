'use strict';

const Queue = require('../lib/PseudoQueue');

describe(' Pseudo Queue test', () => {


    it('1- Can successfully enqueue into a queue', () => {
        let queue = new Queue();
        queue.enqueue(1);
        expect(queue.peek()).toBe(1);
    });


    it('2-Can successfully enqueue multiple values into a queue', () => {
        let queue = new Queue();
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);

        expect(queue.peek()).toBe(1);
    });


    it('3-Can successfully dequeue out of a queue the expected value', () => {
        let queue = new Queue();
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);

        expect(queue.dequeue()).toBe(1);
        expect(queue.dequeue()).toBe(2);
        expect(queue.dequeue()).toBe(3);
    });
    it('4  -if  wount dequeue from empty queue ', () => {
        let queue = new Queue();


        expect(queue.dequeue()).toBeNull();
    });


    it('5-Can successfully dequeu from empty queue  after multiple dequeues ', () => {
        let queue = new Queue();
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);

        queue.dequeue();
        queue.dequeue();
        queue.dequeue();


        expect(queue.dequeue()).toBeNull();
    });

});