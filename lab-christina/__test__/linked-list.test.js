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
  });

  test('should remove a value to end of list', () => {
    let result = new DoublyList(3);
    result.append(second).append(new DoublyList(5));

    result.remove(second);

    expect(result.value).toBe(3);
    expect(result.next.value).toBe(5);
  });
});
