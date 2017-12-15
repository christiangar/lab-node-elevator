const Elevator = require('./elevator.js');
const Person = require('./person.js');

const elevator = new Elevator()
const person1 = new Person("Cristian", 3, 5)


elevator.floorDown()
elevator.floorDown()
elevator.floorDown()
elevator.floorDown()
elevator.floorDown()

elevator.start()
