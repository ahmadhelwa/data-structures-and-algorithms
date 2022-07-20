'use strict';
const Node = require('../node');
const Tree = require("../binary-tree");

let tree = null;

describe("Fizz Buzz function", () => {
    beforeAll(() => {


        let one = new Node(9);
        let two = new Node(25);
        let three = new Node(15);
        let four = new Node(4);
        let five = new Node(8);
        let six = new Node(16);
        let seven = new Node(7);
        let eight = new Node(77);
        let nine = new Node(1);
        let ten = new Node(9);

        one.left = two;
        one.right = three;

        two.left = four;
        two.right = five;

        three.left = six;
        three.right = seven;

        four.left = eight;
        five.right = nine;

        five.left = ten;

        tree = new Tree(one);
    });
    it('check Fizz Buzz function', () => {
        let result = ['fizz', 'buzz', 4, 77, 8, 'fizz', 1, 'fizz buzz', 16, 7];
        tree.fizzBuzz(tree);
        expect(tree.preOrder()).toEqual(result);
    });


})