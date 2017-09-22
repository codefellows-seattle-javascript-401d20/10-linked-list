![cf](https://i.imgur.com/7v5ASc8.png) Lab 10: Doubly Linked List
======

## Submission Instructions
* Work in a fork of this repository
* Work in a branch on your fork
* Write all of your code in a directory named `lab-` + `<your name>` **e.g.** `lab-susan`
* Open a pull request to this repository
* Submit on canvas a question and observation, how long you spent, and a link to your pull request

## Resources
* [node uuid docs](https://github.com/kelektiv/node-uuid)

## Configuration 
Configure the root of your repository with the following files and directories. Thoughfully name and organize any aditional configuration or module files.
* **README.md** - contains documentation
* **.env** - contains env variables **(should be git ignored)**
* **.gitignore** - contains a [robust](http://gitignore.io) `.gitignore` file 
* **.eslintrc** - contains the course linter configuratoin
* **.eslintignore** - contains the course linter ignore configuration
* **package.json** - contains npm package config
  * create a `lint` script for running eslint
  * create a `test` script for running tests
  * create a `start` script for running your server
* **lib/** - contains module definitions
* **model/** - contains module definitions
* **route/** - contains module definitions
* **\_\_test\_\_/** - contains test modules

## Feature Tasks  
#### Doubly Linked List
Create a `DoublyLinkedLinked` constructor using ES6 class syntax
* Add an append method that appends a DoublyLinkedList node to the list
* Add a remove method that removes a Node from a doubly linked list by reference
* Add a method of your choise to the constructor (use array methods for inpiration)

## Tests
Unit test each method of your constructor. 

## Documentation
In your README.md describe the exported values of each module you have defined. Every function description should include it's airty (expected number of paramiters), the expected data for each paramiter (data-type and limitations), and it's behavior (for both valid and invalued use). Feel free to write any additional information in your README.md.
