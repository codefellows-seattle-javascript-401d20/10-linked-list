'use strict';

class DoublyLinkedList {
  constructor(value){
    this.value = value;
    this.next = null;
    this.previous = null;
  }

  append(node){
    if(!(node instanceof DoublyLinkedList))
      throw new Error('USAGE ERROR: node must be a Doubly Linked List');
    if(this.next)
      this.next.append(node);
    else
    this.next = node;
    this.previous = this;

    return this;
  }

  remove(node){
    if(!(node instanceof DoublyLinkedList))
      throw new Error('USAGE ERROR: node must be a Doubly Linked List');

    if(this.next === null){
      return this;
    } else if (this.next === node){
      this.next = this.next.next;
    } else {
      this.next.remove(node);
    }

    return this;
  }
}

module.exports = DoublyLinkedList;
