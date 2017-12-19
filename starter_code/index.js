const Elevator = require('./elevator.js');
const Person = require('./person.js');
var elevator = new Elevator()
var person1 = new Person("Cristian", 1, 3)
elevator.start();
elevator.call(person1);
