"use strict";

const Queue = require("../lib/queue");

describe(" Queue test", () => {
  it("1- Can successfully enqueue into a queue", () => {
    let queue = new Queue();
    queue.enqueue(1);
    expect(queue.front.val).toBe(1);
    expect(queue.rear.val).toBe(1);
  });

  it("2-Can successfully enqueue multiple values into a queueCan successfully enqueue multiple values into a queue", () => {
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.front.val).toBe(1);
    expect(queue.rear.val).toBe(3);
  });

  it("3-Can successfully dequeue out of a queue the expected value", () => {
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.dequeue()).toBe(1);
  });

  it("4-Can successfully peek into a queue, seeing the expected value", () => {
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.peek()).toBe(1);
  });

  it("5- Can successfully empty a queue after multiple dequeues", () => {
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    queue.dequeue();
    queue.dequeue();
    queue.dequeue();

    expect(queue.front).toBeNull();
  });

  it("6-Can successfully instantiate an empty queue", () => {
    let queue = new Queue();
    expect(queue.front).toBeNull();
  });

  it("7-Calling dequeue or peek on empty queue raises exception", () => {
    let queue = new Queue();
    expect(queue.dequeue()).toBeNull;
    expect(queue.peek()).toBeNull;
  });
});
