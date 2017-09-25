# Doubly Linked List

The `DoubleLinkedList(obj)` constructor is used to create a new doubly linked list object,
it has an arity of one.

```
>>let dll = new DoubleLinkedList(3);

// dll = {
//  value: 3, 
//  prev: null, 
//  next: null
//  }
```

## .append()
The `append()` method takes in a `DoubleLinkedList` as it's parameter and appends it to a `DoubleLinkedList` Object

```
let dll = new DoubleLinkedList(3);
dll.append(new DoubleLinkedList(5)

//DoublyLinkedList {
//value: 3,
// prev: null,
//next: DoublyLinkedList { 
  // value: 5, 
  // prev: [Circular], 
  // next: null } }

```

## .remove();

The `remove()` method takes in a `DoubleLinkedList` as it's parameter and removes it to a `DoubleLinkedList` Object

```
let first = new DoubleLinkedList(3);
let second = new DoubleLinkedList(5);
let third = new DoubleLinkedList(7);

let dll = first;
dll.append(second)
  .append(third);

dll.remove(second);


//DoublyLinkedList {
//value: 3,
// prev: null,
// next: DoublyLinkedList { 
//  value: 7, 
//  prev: [Circular], 
//  next: null 
//  } 
// }

```

## .map()
the `map()` method takes in a callback function as it's parameter and returns a new `DoubleLinkedList`

```
let dll = new DoubleLinkedList(3);
dll.append(new DoubleLinkedList(5))
  .append(new DoubleLinkedList(7));

let newDll = dll.map(n => n + 3);


// DoublyLinkedList {
//  value: 6,
//  prev: null,
//  next:
//   DoublyLinkedList {
//     value: 8,
//     prev: [Circular],
//     next: DoublyLinkedList { 
//       value: 10, 
//       prev: [Circular], 
//       next: null } 
//    } 
//  }

```

## .reduce()

The `reduce()` take in a callback and an initial value and reduces it to a single value

```
let dll = new DoubleLinkedList(3);
dll.append(new DoubleLinkedList(5))
  .append(new DoubleLinkedList(7));

dll.reduce((a, b) => a + b, 0);

// 15

```

