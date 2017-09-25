'use strict';
const DoublyLinkedList = require('../model/doubly-linked-list.js');

describe('doubly linked list', () => {
  test('it should have a value and no next', () => {
    let result = new DoublyLinkedList(3);
    expect(result.value).toBe(3);
    expect(result.next).toBe(null);
    expect(result.previous).toBe(null);
  });

  test('it should append a node to the end of the list', () => {
    let result = new DoublyLinkedList(3);
    result.append(new DoublyLinkedList(4)).append(new DoublyLinkedList(5));
    expect(result.value).toBe(3);
    expect(result.next.value).toBe(4);
    expect(result.next.next.value).toBe(5);
    expect(result.next.next.next).toBe(null);
  });

  test('it should remove a node from the list', () => {
    let result = new DoublyLinkedList(3);
    let second = new DoublyLinkedList(4);
    result.append(second).append(new DoublyLinkedList(5));

    result.remove(second);

    expect(result.value).toBe(3);
    expect(result.next.value).toBe(5);
    expect(result.next.next).toBe(null);

  });
});
