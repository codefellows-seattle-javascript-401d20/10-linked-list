const DoublyLinkedList = require('../model/doubly-linked-list.js');


describe('Doubly Linked List Test', () => {
  describe('creating a doubly linked list', () => {
    test('Doubly linked list created successfully', () => {
      let dll = new DoublyLinkedList(3);
      expect(dll.value).toEqual(3);
      expect(dll.next).toEqual(null);
      expect(dll.prev).toEqual(null);
    });

    test('Doubly linked list appended successfully', () => {
      let dll = new DoublyLinkedList(3);
      dll.append(new DoublyLinkedList(5));
      dll.append(new DoublyLinkedList(7));
      console.log(dll);
      expect(dll.next.value).toEqual(5);
      expect(dll.next.prev.value).toBe(3);
      expect(dll.next.next.value).toBe(7);
      expect(dll.prev).toEqual(null);
    });
  });
});