'use strict';
class BinaryTree {
    constructor(root = null) {
        this.root = root;

    }

    // root - left - right
    preOrder() {

        let result = [];

        let traverse = (node) => {
            result.push(node.value);
            //if left go left
            if (node.left) traverse(node.left);
            //if right go right
            if (node.right) traverse(node.right);
        }

        traverse(this.root);
        return result;

    }



    //  left - root - right
    inOrder() {

        let result = [];
        let traverse = (node) => {
            //if left go left
            if (node.left) traverse(node.left);
            result.push(node.value);
            //if right go right
            if (node.right) traverse(node.right);
        }


        traverse(this.root);
        return result;

    }



    //  left - right - root
    postOrder() {


        let result = [];

        let traverse = (node) => {
            //if left go left
            if (node.left) traverse(node.left);
            //if right go right
            if (node.right) traverse(node.right);
            result.push(node.value);
        }

        traverse(this.root);
        return result;

    }

    oddSummation() {

        let array = this.inOrder();
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            if (array[i] % 2 != 0)
                sum += array[i];
        }
        return sum;

    }




}



module.exports = BinaryTree;