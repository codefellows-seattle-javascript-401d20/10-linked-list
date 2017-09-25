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
      this.next.prev = this;
    } else {
      this.next.remove(node);
    }
    return this;
  }

  map(callback) {
    if (!(typeof callback === 'function'))
      throw new Error('__USAGE_ERROR_: reduce should have a callback function');

      let pointer = this;
      let result = [];

    while (pointer) {
      result.push(callback(pointer.value));
      pointer = pointer.next;
    }
    return result;
  }

  reduce(...args) {
    if (!(typeof args[0] === 'function'))
      throw new Error('__USAGE_ERROR_: reduce should have a callback and a initial state');

    let pointer = this;
    let [callback, initialState] = args;
    let accumulator = initialState;

    while (pointer) {
      accumulator = callback(accumulator, pointer.value);
      pointer = pointer.next;
    }
    return accumulator;
  }
}






module.exports = DoublyLinkedList;