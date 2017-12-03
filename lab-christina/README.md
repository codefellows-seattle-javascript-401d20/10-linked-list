## 10-LinkedList
***
##### Doubly Linked List
###### linked-list.js

* Exports a constructor that takes the inputed value(an arity of one) and outputs an object with three properties.

####### Three methods of the constructor ::
###### append() method
* The append method has an arity of one.
* The append method first verifies that the inputed value is an instance of the constructor.
* If it is and the next property of the node before has a next value it will continue to loop through each node until next is equal to null then append itself to the list.

###### remove() method
* The remove method has an arity of one.
* The remove method first verifies that the inputed value is an instance of the constructor.
* Second it checks if the current node is the 'node we're looking for'. If it is we successfully remove the node from the linked list by disconnecting is from both it's own previous and next properties and connecting them to each other.

###### print()
* The print method has an arity of one.
* The print method first verifies that the inputed value is an instance of the constructor.
* Second it checks that the inputed node has a next property
* If it does not, it returns the value of the current node.
* Lastly, while there is a this.next property, then return the value of the nodes consecutively using recursion.


### linked-list.test.js

* First we require in the linked-list.js module.
* In the first test a new instance of the doublylist constructor in instantiated. The test expects the return to be an object with the value passed in, as well as a next and previous value of null;
* In the second test a new instance of the constructor in created. Second the append method is used to append a second node. The test tests that the second value appends itself to the second with result.next.value
* In the third test two instances are created. Thirdly a third value is append to the second before the remove method is tested on the second. The test expect the first and third values to remain.
* For the print test it is tested that the expected values of each node is returned in order.
* As a last test for assurance it is tested that if a nodes next property is null it will return null.
