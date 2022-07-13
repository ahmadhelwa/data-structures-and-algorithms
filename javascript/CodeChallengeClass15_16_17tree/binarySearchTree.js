'use strict';

const Node = require('./node');
class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    add(data) {

        var newNode = new Node(data);

        if (this.root === null)
            this.root = newNode;
        else


            this.insertNode(this.root, newNode);


    }


    insertNode(node, newNode) {
        if (newNode.data < node.data) {

            if (node.left === null)
                node.left = newNode;
            else


                this.insertNode(node.left, newNode);
        }


        else {

            if (node.right === null)
                node.right = newNode;
            else


                this.insertNode(node.right, newNode);
        }
    }



    contains(value) {
        let current = this.root;
        while (current !== null) {
            if (current.value === value) {
                return true;
            } else if (value < current.value) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return false;
    }


}
module.exports = BinarySearchTree;









