'use strict';

const DoublyList = require('../model/linked-list.js');

describe('linked list', () => {
  test('it should have a value and no next', () => {
    let result = new DoublyList(3);

    expect(result.value).toBe(3);
    expect(result.next).toBe(null);
    expect(result.previous).toBe(null);
  });

  test('should add a value to end of list', () => {
    let result = new DoublyList(3);
    result.append(new DoublyList(4));

    expect(result.value).toBe(3);
    expect(result.next.value).toBe(4);
    expect(result.next.previous.value).toBe(3);
  });

  test('should remove a value to end of list', () => {
    let head = new DoublyList(3);
    let middle = new DoublyList(4);
    head.append(middle)
    let tail = new DoublyList(5);
    head.append(tail);

    head.remove(middle);

    expect(head.value).toBe(3);
    expect(head.next.value).toBe(5);
  });

  test('should return the accumulative value of the nodes collection', () => {
    let head = new DoublyList(3);
    let tail = new DoublyList(4);
    head.append(tail);

    expect(this.value).toBe(7);
  })
});
