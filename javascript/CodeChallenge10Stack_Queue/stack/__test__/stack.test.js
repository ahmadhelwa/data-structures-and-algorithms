'use strict';

const Stack = require('../lib/stack');

describe('Stack  test', () => {
    //1
    test('1- Can successfully push onto a stack', () => {
        let stack = new Stack();
        stack.push(1);
        expect(stack.top.value).toBe(1);
        expect(stack.peek()).toBe(1);
    });

    //2
    it('2-Can successfully push multiple values onto a stack', () => {
        let stack = new Stack();
        stack.push(1);
        stack.push(2);
        stack.push(3);

        expect(stack.top.value).toBe(3);
        expect(stack.peek()).toBe(3);
    });


    //3
    it('3-Can successfully pop off the stack', () => {
        let stack = new Stack();
        stack.push(1);
        stack.push(2);
        stack.push(3);
        stack.pop();
        expect(stack.top.value).toBe(2);
        expect(stack.peek()).toBe(2);

    });



    it('4-Can successfully empty a stack after multiple pops', () => {
        let stack = new Stack();
        stack.push(1);
        stack.push(2);
        stack.push(3);

        stack.pop();
        stack.pop();
        stack.pop();

        expect(stack.top).toBeNull();
    });




    it('5- Can successfully peek the next item on the stack', () => {
        let stack = new Stack();
        stack.push(1);
        stack.push(2);
        stack.push(3);

        expect(stack.peek()).toBe(3);
    });


    it('6-Can successfully instantiate an empty stack', () => {
        let stack = new Stack();
        expect(stack.top).toBeNull();
    });

    it('7-Calling pop or peek on empty stack raises exception', () => {
        let stack = new Stack();
        expect(stack.pop()).toBeNull;
        expect(stack.peek()).toBeNull;

    });


});