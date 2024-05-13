/** Node: node for a singly linked list. */

class Node {
  constructor(val, next=null) {
    this.val = val;
    this.next = next;
  }
}
let nodes = new Node("one", new Node("two", new Node("three")));

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  append(val){
    let current = this.head;
    while(current.next){
      current = current.next
    }
    current.next = new Node(val)
  }

//   // create a custom method to get the node at a specified index

  retrieveIndex(index){
    let current = this.head;
    let count = 0;

    while (current !== null && count != index){
      count++;
      current = current.next;
    }

    return current;
  }
    


//   /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);

    if (!this.head){
      this.head = newNode;
      this.tail = this.head;
    } else{
      this.tail.next = newNode;
      this.tail = newNode
    }
    
  }

//   /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);

    if (this.head === null){
      this.head = newNode; 

    }else{
      newNode.next = this.head;
      this.head = newNode;
    }

    if (this.length === 0) this.tail = this.head;

    this.length += 1;
  }

//   /** pop(): return & remove last item. */

  pop() {
    return this.removeAt(this.length -1);
  }

//   /** shift(): return & remove first item. */

  shift() {
    return this.removeAt(0);
  }

//   /** getAt(idx): get val at idx. */

  getAt(index) {
    if (index >= this.length || index < 0){
      throw new Error('Invalid index')

    }

    return this.retrieveIndex(index).val;
  }

//   /** setAt(idx, val): set val at idx to val */

  setAt(index, val) {
    if (index >= this.length || index < 0){
      throw new Error('Invalid index');
    }
    let current = this.retrieveIndex(index);
    current.val = val;
  }

//   /** insertAt(idx, val): add node w/val before idx. */

  insertAt(index, val) {
    if (index >= this.length || index < 0){
      throw new Error('Invalid index');
    }

    if (index === 0) return this.unshift(val);
    if (index === this.length) return this.push(val);

    let prev = this.retrieveIndex(index - 1);

    let newNode = new Node(val);
    newNode.next = prev.next;
    prev.next = newNode;

    this.length += 1;
  }

//   /** removeAt(idx): return & remove item at idx, */

  removeAt(index) {
    if (index >= this.length || index < 0){
      throw new Error('Invalid index');
    }

//     // special case: remove first item

    if (index === 0) {
      let val = this.head.val;
      this.head = this.head.next;
      this.length -= 1;
      if (this.length < 2) this.tail = this.head;
      return val;
    }

    let prev = this.retrieveIndex(index - 1);

//     // special case: remove tail

    if (idx === this.length - 1) {
      let val = prev.next.val;
      prev.next = null;
      this.tail = prev;
      this.length -= 1;
      return val;
    }

//     // normal case: remove in middle

    let val = prev.next.val;
    prev.next = prev.next.next;
    this.length -= 1;
    return val;

  }

//   /** average(): return an average of all values in the list */

  average() {
//     // check if the list is empty
    if (this.length === 0) return 0;
//     // initialize total and current
    let total = 0;
    let current = this.head;
//     //Traverse the linked list: It enters a loop that iterates over each node
//     // in the linked list. At each iteration, it adds the value of the current node 
//     //(current.val) to the total variable and moves current to the next node (current.next).
    while (current) {
      total += current.val;
      current = current.next;
    }

    return total / this.length;
  }
}

// module.exports = LinkedList;
