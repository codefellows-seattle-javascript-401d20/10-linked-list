## 10-LinkedList
***
##### Doubly Linked List
###### linked-list.js

* Exports a constructor that takes the inputed value(an arity of one) and outputs an object with three properties.
* The append method has an arity of one. The append method first verifies that the inputed value is an instanceof the constructor. If it is and the next property of the node before has a next value it will continue to walk through each node until next is equal to null then append itself to the list.
* The remove method is similar to the append method. First checking that the input is an instance of the constructor before removing selected node.

### linked-list.test.js

* First we require in the linked-list.js module.
* In the first test a new instance of the doublylist constructor in instantiated. The test expects the return to be an object with the value passed in, as well as a next and previous value of null;
* In the second test a new instance of the constructor in created. Second the append method is used to append a second node. The test tests that the second value appends itself to the second with result.next.value
* In the third test two instances are created. Thirdly a third value is append to the second before the remove method is tested on the second. The test expect the first and third values to remain.
