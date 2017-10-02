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
    this.previous = this;
  return this
  }

remove(node){
  if(!(node instanceof DoublyList))
    throw new Error('Node must be a linked list');
  if(!this.next)
    return this;
  if(this.next === node)
    this.next = this.next.next;
  else
    this.next.remove(node)

    return this
  }
}

filter(node)
  if(!(node instanceof DoublyList))
    throw new console.error('Must be a linked list');
  if(!this.next)


module.exports = DoublyList;
