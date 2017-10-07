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
  }

  reduce(node){
    if(!(node instanceof DoublyList))
      throw new console.error('Must be a linked list');
    if(!this.next)
      return this;
    if(this.next)
      var result = this;
      let reduceReturn = (callback, initialState) => args;
        var accumulativeValue = initialState;
      while(node)
        accumulativeValue = callback(accumulativeValue, result.value);
        result = result.next;
      return accumulativeValue;
    };
}

module.exports = DoublyList;
