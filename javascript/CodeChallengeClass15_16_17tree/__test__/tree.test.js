'use strict';
const BinaryTree = require('../binary-tree');
const Node = require('../node');
const BinarySearchTree = require('../binarySearchTree')

let tree = null;

describe("Binary Tree", () => {
    beforeAll(() => {
        let one = new Node(1);
        let two = new Node(2);
        let three = new Node(3);
        let four = new Node(4);
        let five = new Node(5);
        let six = new Node(6);
        let seven = new Node(7);
        let eight = new Node(8);
        let nine = new Node(9);

        one.left = two;
        one.right = three;
        two.left = six;
        six.right = seven;
        seven.left = eight;
        seven.right = nine;
        three.left = four;
        three.right = five;

        tree = new BinaryTree(one);
    });
    it('Can successfully instantiate an empty tree', () => {
        const newTree = new BinaryTree();
        expect(newTree.root).toBeNull();
    });

    test('Can successfully instantiate a tree with a single root node', () => {
        const newTree = new BinaryTree();
        expect(newTree.root).toBeNull();
        expect(tree.root.value).toEqual(1);
    });
    test('Can successfully return a collection from a preorder traversal', () => {
        let expectedOutput = [1, 2, 6, 7, 8, 9, 3, 4, 5];
        let preOrder = tree.preOrder();
        expect(preOrder).toEqual(expectedOutput);
    });
    test('Can successfully return a collection from an inorder traversal', () => {
        let expectedOutput = [6, 8, 7, 9, 2, 1, 4, 3, 5];
        let inOrder = tree.inOrder();
        expect(inOrder).toEqual(expectedOutput);
    });
    test('Can successfully return a collection from a postorder traversal', () => {
        let expectedOutput = [8, 9, 7, 6, 2, 4, 5, 3, 1];
        let postOrder = tree.postOrder();
        expect(postOrder).toEqual(expectedOutput);
    });

    test('For a Binary Search Tree, can successfully add and test if node is found or not found', () => {

        let tree = new BinarySearchTree();
        tree.add(1);
        tree.add(2);
        tree.add(3);
        expect(tree.contains(1)).toEqual(true);
        expect(tree.contains(5)).toEqual(false);


    });
    test('test max number in tree', () => {
        let max = tree.max();
        expect(max).toEqual(9);
    });
    test('test breadthfirst function ', () => {
        let expectresult = [1, 2, 3, 6, 4, 5, 7, 8, 9];
        let result = tree.breadthfirst();
        expect(result).toEqual(expectresult);
    });
})