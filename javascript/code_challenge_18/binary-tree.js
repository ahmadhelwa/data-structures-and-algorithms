"use strict";
class Tree {
    constructor(root) {
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


    fizzBuzz() {

        function convertNodeValue(value) {
            if (value % 3 == 0 && value % 5 == 0) return "fizz buzz";
            else if (value % 3 == 0) return "fizz";
            else if (value % 5 == 0) return "buzz";
            else return value;

        }

        function moving(node) {
            if (node.left) {
                node.left.value = convertNodeValue(node.left.value);
                moving(node.left);
            }
            if (node.right) {
                node.right.value = convertNodeValue(node.right.value);
                moving(node.right);
            }
            node.value = convertNodeValue(node.value);
        }



        moving(this.root);
        return this.root;
    }
}

module.exports = Tree;