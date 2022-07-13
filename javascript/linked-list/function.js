const LinkedList = require('./linkedList');

function zipLists(list1, list2) {
  let currentNode1 = list1.head;
  let currentNode2 = list2.head;
  let newList = new LinkedList();
  while (currentNode1 !== null || currentNode2 !== null) {
    if(currentNode1 !== null) {
      newList.append(currentNode1.value);
      currentNode1 = currentNode1.next;
    }
    if(currentNode2 !== null) {
      newList.append(currentNode2.value);
      currentNode2 = currentNode2.next;
    }
  }
  return newList;
}

module.exports = zipLists;