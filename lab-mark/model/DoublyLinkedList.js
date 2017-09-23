'use strict';

class DoublyLinkedList {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }

  append(node) {
    if(!(node instanceof DoublyLinkedList))
      throw new Error('Node must be a DoublyLinkedList.');

    // Next exists
    if(this.next) {
      this.next.append(node);
    // Next is null
    } else {
      node.prev = this;
      this.next = node;
    }

    return this;
  }

  remove(node) {
    if(!(node instanceof DoublyLinkedList))
      throw new Error('Node must be a DoublyLinkedList.');

    // Node doesn't exist
    if(!this.next){
      return this;
    // Node to remove is next one
    } else if (this.next === node){
      // Node exists after found node
      if(this.next.next) {
        this.next = this.next.next;
        this.next.prev = this;
      } else {
        this.next = null;
      }
    // Pass the duties of remove to next node
    } else {
      this.next.remove(node);
    }
    return this;
  }

  sum() {

    let current = this;
    let sum = current.value;
    while(current.next) {
      sum += current.next.value;
      current = current.next;
    }

    return sum;
  }
}

module.exports = DoublyLinkedList;
