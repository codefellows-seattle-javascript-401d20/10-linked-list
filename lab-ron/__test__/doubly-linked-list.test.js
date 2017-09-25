const DoublyLinkedList = require('../model/doubly-linked-list.js');


describe('Doubly Linked List Test', () => {
  test('Doubly linked list created successfully', () => {
    let result = new DoublyLinkedList(3);
    expect(result.value).toBe(3);
    expect(result.next).toBe(null);
    expect(result.prev).toBe(null);
  });

  test('Doubly linked list appended successfully', () => {
    let result = new DoublyLinkedList(3);
    result.append(new DoublyLinkedList(5));
    result.append(new DoublyLinkedList(7));

    expect(result.next.value).toBe(5);
    expect(result.next.prev.value).toBe(3);
    expect(result.next.next.value).toBe(7);
    expect(result.prev).toBe(null);
  });

  test('Doubly linked list not appended', () => {
    let result = new DoublyLinkedList(3);
    expect(() => result.append(5)).toThrowError('__USAGE_ERROR__: Node must be a DoublyLinkedList');
  });

  test('Doubly linked list removed successfully', () => {
    let result = new DoublyLinkedList(3);
    let second = new DoublyLinkedList(5);
    result.append(second).append(new DoublyLinkedList(7));

    result.remove(second);
    expect(result.value).toBe(3);
    expect(result.next.value).toBe(7);
    expect(result.next.prev.value).toBe(3);
    expect(result.next.next).toBe(null);
  });

});