'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;

    return value;
  };
};

class DoublyList {
  constructor(value) {
  this.data = value;
};
  append(data) {
    if(!this.next)
      this.next = data;
    else {
      this.next.append(data)
      return this
    };
  };
};

//create an object.
new Node(4);
new Node(5);
new Node(6);
