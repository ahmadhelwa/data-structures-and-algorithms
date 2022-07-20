'use strict';
const Node = require('./node');
const Tree = require("./binary-tree");

let tree = null;

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

console.log(tree.preOrder());
tree.fizzBuzz(tree);
console.log(tree.preOrder());