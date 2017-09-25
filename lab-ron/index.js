'use strict';

const DoubleLinkedList = require('./model/doubly-linked-list.js');

let dll = new DoubleLinkedList(3);
dll.append(new DoubleLinkedList(5)).append(new DoubleLinkedList(7));

console.log(dll.map(n => n + 3));
console.log(dll.reduce((a, b) => a + b, 0));

