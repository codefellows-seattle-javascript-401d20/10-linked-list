'use strict';

class DoublyLinkedList {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }

  append(node) {
    if (!(node instanceof DoublyLinkedList))
      throw new Error('__USAGE_ERROR__: Node must be a DoublyLinkedList');
    if (!this.next) {
      node.prev = this;
      this.next = node;
    }
    else
      this.next.append(node);
    return this;
  }

  remove(node) {
    if (!(node instanceof DoublyLinkedList))
      throw new Error('__USAGE_ERROR__: Node must be a DoublyLinkedList');

    if (!this.next) {
      return this;
    } else if (this.next === node) {
      this.next = this.next.next;
    } else {
      this.next.remove(node);
    }
    return this;
  }
}


module.exports = DoublyLinkedList;