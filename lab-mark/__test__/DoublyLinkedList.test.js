'use strict';

const DoublyLinkedList = require('../model/DoublyLinkedList');

describe('constructor', () => {
  test('valid input', () => {
    let root = new DoublyLinkedList(3);
    expect(root.value).toEqual(3);
    expect(root.next).toEqual(null);
    expect(root.prev).toEqual(null);
  });
});

describe('append', () => {
  test('append one DLL', () => {
    let root = new DoublyLinkedList(1);
    let next = new DoublyLinkedList(2);
    root.append(next);
    expect(root.value).toEqual(1);
    expect(root.prev).toEqual(null);
    expect(root.next).toBe(next);
    expect(root.next.value).toEqual(2);
    expect(root.next.prev).toBe(root);
    expect(root.next.next).toEqual(null);
  });

  test('append three DLL', () => {
    let root = new DoublyLinkedList(1);
    let second = new DoublyLinkedList(2);
    let third = new DoublyLinkedList(3);

    root.append(second);
    root.append(third);
    expect(root.value).toEqual(1);
    expect(root.prev).toEqual(null);
    expect(root.next).toBe(second);
    expect(second.value).toEqual(2);
    expect(second.prev).toBe(root);
    expect(second.next).toEqual(third);
    expect(third.value).toEqual(3);
    expect(third.prev).toBe(second);
    expect(third.next).toEqual(null);
  });

  test('None node input', () => {
    let root = new DoublyLinkedList(1);
    expect(() => root.append(2)).toThrowError('Node must be a DoublyLinkedList.');
  });

});

describe('remove', () => {

  test('remove one DLL from two nodes', () => {
    let root = new DoublyLinkedList(1);
    let second = new DoublyLinkedList(2);
    root.append(second);
    expect(root.value).toEqual(1);
    expect(root.prev).toEqual(null);
    expect(root.next).toBe(second);
    expect(second.value).toEqual(2);
    expect(second.prev).toBe(root);
    expect(second.next).toEqual(null);

    root.remove(second);
    expect(root.next).toEqual(null);
  });

  test('remove second node from three node DLL', () => {
    let root = new DoublyLinkedList(1);
    let second = new DoublyLinkedList(2);
    let third = new DoublyLinkedList(3);

    root.append(second);
    root.append(third);

    root.remove(second);
    expect(root.next).toBe(third);
    expect(third.prev).toBe(root);
  });

  test('node doesn\'t exist in DLL', () => {
    let root = new DoublyLinkedList(1);
    let second = new DoublyLinkedList(2);
    let third = new DoublyLinkedList(3);
    let random = new DoublyLinkedList(4);

    // random not appended
    root.append(second);
    root.append(third);

    // Expect no errors and nothing removed
    root.remove(random);
    expect(root.next).toBe(second);
    expect(second.next).toBe(third);
    expect(third.next).toBe(null);
    expect(third.prev).toBe(second);
    expect(second.prev).toBe(root);
    expect(root.prev).toBe(null);
  });


  test('None node input', () => {
    let root = new DoublyLinkedList(1);
    expect(() => root.remove(2)).toThrowError('Node must be a DoublyLinkedList.');
  });
});

describe('sum', () => {
  test('sum of three nodes with number values', () => {
    let root = new DoublyLinkedList(1);
    let second = new DoublyLinkedList(2);
    let third = new DoublyLinkedList(3);

    root.append(second).append(third);

    expect(root.sum()).toEqual(6);
  });

  test('sum of three nodes with string values', () => {
    let root = new DoublyLinkedList('a');
    let second = new DoublyLinkedList('b');
    let third = new DoublyLinkedList('c');

    root.append(second).append(third);

    expect(root.sum()).toEqual('abc');
  });

});
