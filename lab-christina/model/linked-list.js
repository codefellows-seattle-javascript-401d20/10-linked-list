'use strict';

class DoublyList {//create a constructor called DoublyList
  constructor(value){//constructor takes in a value
    this.value = value;
    this.next = null;
    this.previous = null;
  }//constructor returns an object with the value equaling the value passed in and a next and previous property. Making it a node.

  append(node) {//The append method is a method on the contructor
    if(!(node instanceof DoublyList)) //checking that the node is an instance of the constructor
      throw new Error('Must be a linked list');//throw error if not, return
    if(!this.next)//checking if this.next is null
    this.next = node;// if it is it assigns the current node to this.next //
    else
    this.next.append(node);
    this.next.previous = this;
    return this
  }

  remove(node) {
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

  print(node) {
    if(!(node instanceof DoublyList))
      throw new Error('Must be a linked list');
    if(!this.next)
      return this.value
    while(this.next)
      return this.next.value
      print(this.next)
  }
}
module.exports = DoublyList;
