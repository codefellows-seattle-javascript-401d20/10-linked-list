'use strict';

class DoublyLinkedList {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
    this.head = this;
    this.tail = this;
  }

  append(node) {
    if (!(node instanceof DoublyLinkedList))
      throw new Error('Node must be a DoublyLinkedList.');
    if (this.next) {
      this.next.append(node);
    } else {
      node.prev = this;
      this.next = node;
    }
    this.tail = node;
    return this;
  }

  prepend(node) {
    if (!(node instanceof DoublyLinkedList))
      throw new Error('Node must be a DoublyLinkedList.');
    if (this.prev) {
      this.prev.append(node);
    } else {
      node.next = this;
      this.prev = node;
    }
    this.head = node;
    return this;
  }

  remove(node) {
    if (!(node instanceof DoublyLinkedList))
      throw new Error('Node must be a DoublyLinkedList.');
    if (!this.next) {
      return this;
    } else if (this.next !== node) {
      this.next.remove(node);
    } else {
      if (!this.next.next) {
        this.next = null;
      } else {
        this.next = this.next.next;
        this.next.prev = this;
      }
    }
    return this;
  }
}

module.exports = DoublyLinkedList;
