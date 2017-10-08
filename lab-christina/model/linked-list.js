'use strict';

class DoublyList {
  constructor(value){
    this.value = value;
    this.next = null;
    this.previous = null;
  }

  append(node) {
    if(!(node instanceof DoublyList))
      throw new Error('Must be a linked list');
    if(!this.next)
    this.next = node;
    else
    this.next.append(node);
    this.next.previous = this;
    return this
  }

  remove(node){
    if(!(node instanceof DoublyList))
      throw new Error('Node must be a linked list');
    if(this === node) {
      let prev = this.previous;
      prev.next = prev.next.next;
      prev.next.previous = prev;
    } else {
      if(!this.next)
      return this;
      this.next.remove(node);
    }
  };

  print(node){
    let value = this;
    let pointer = this.value;
    while(pointer !== null) {
     console.log(value);
    };
  };
};

module.exports = DoublyList;
