'use strict';

class DoublyLinkedLinked {
  constructor(value){
    this.value = value;
    this.previous = null;
    this.next = null;
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(node){
    if(!(node instanceof DoublyLinkedLinked))
      throw new Error('USAGE ERROR: node must be a DoublyLinkedLinked');
    if(!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.previous = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;

    console.log(this);
    return this;
  }

  remove(node){
    let current = this.head;
    while(current) {
      if(current.data === node) {
        if(current === this.head && current === this.tail) {
          this.head = null;
          this.tail = null;
        } else if(current === this.head) {
          this.head = this.head.next;
          this.head.previous = null;
        } else if(current === this.tail) {
          this.tail = this.tail.previous;
          this.tail.next = null;
        } else {
          current.previous.next = current.next;
          current.next.previous = current.previous;
        }
        this.length--;
      }
      current = current.next;
    }
  }
 }

module.exports = DoublyLinkedLinked;
