const DoublyLinkedList = require('../model/doubly-linked-list.js');
describe('DOUBLY LINKED LIST', () => {
  describe('Doubly Linked List Create', () => {
    test('Doubly linked list created successfully', () => {
      let result = new DoublyLinkedList(3);
      expect(result.value).toBe(3);
      expect(result.next).toBe(null);
      expect(result.prev).toBe(null);
    });
  });

  describe('Append to Doubly Linked List', () => {


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
  });


  describe('Remove from Doubly Linked List', () => {
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


  describe('Map Function', () => {

    test('Not implemented properly', () => {
      let result = new DoublyLinkedList(3);

      expect(() => result.map('hello'))
        .toThrowError('__USAGE_ERROR_: reduce should take in a callback function as its parameter');

    });

    test('Map function maps', () => {
      let result = new DoublyLinkedList(3);
      result.append(new DoublyLinkedList(5));
      result.append(new DoublyLinkedList(7));
      result.map(n => n + 2);
      expect(result.value).toBe(5);
      expect(result.next.value).toBe(7);
      expect(result.next.next.value).toBe(9);
    });
  });

  describe('Reduce Function', () => {
    test('Not implemented properly', () => {
      let result = new DoublyLinkedList(3);

      expect(() => result.reduce('hello', 'world'))
        .toThrowError('__USAGE_ERROR_: reduce should take in a callback and a initial state');


    });
  });

});