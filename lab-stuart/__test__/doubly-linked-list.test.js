'use strict';

const doublyLinkedList = require('../model/doubly-linked-list.js');

describe('doubly linked list', () => {
  test('it should have a value and no prev, no next, and a common head and tail', () => {
    let list = new doublyLinkedList(3);
    expect(list.value).toBe(3);
    expect(list.head.value).toBe(3);
    expect(list.tail.value).toBe(3);
    expect(list.prev).toBe(null);
    expect(list.next).toBe(null);
  });

  test('it should append a node to the end of the list and track head, tail, prev, and next', () => {
    let list = new doublyLinkedList(3);

    expect(list.value).toBe(3);

    list.append(new doublyLinkedList(4)).append(new doublyLinkedList(5));

    expect(list.next.value).toBe(4);
    expect(list.next.prev.value).toBe(3);
    expect(list.next.next.value).toBe(5);
    expect(list.next.next.prev.value).toBe(4);
    expect(list.head.value).toBe(3);
    expect(list.tail.value).toBe(5);
    expect(list.next.next.next).toBe(null);
  });

  test('it should prepend a node to the start of the list and track head, tail, prev, and next', () => {
    let list = new doublyLinkedList(3);

    expect(list.value).toBe(3);

    list.prepend(new doublyLinkedList(4)).append(new doublyLinkedList(5));

    expect(list.prev.value).toBe(4);
    expect(list.next.prev.value).toBe(3);
    expect(list.next.value).toBe(5);
    expect(list.next.prev.prev.value).toBe(4);
    expect(list.head.value).toBe(4);
    expect(list.tail.value).toBe(5);
  });

  test('it should remove a node from the list', () => {
    let list = new doublyLinkedList(3);

    expect(list.head.value).toBe(3);
    expect(list.tail.value).toBe(3);

    let second = new doublyLinkedList(4);
    
    list.append(second).append(new doublyLinkedList(5)).append(new doublyLinkedList(6));
    
    expect(list.tail.value).toBe(6);

    list.remove(second);
    
    expect(list.value).toBe(3)
    expect(list.next.value).toBe(5)
    expect(list.next.prev.value).toBe(3)
    expect(list.next.next.value).toBe(6)
    expect(list.next.next.prev.value).toBe(5)
  });
});
