const Person = require('./person.js');
const SECOND = 1000;

class Elevator {
  constructor() {
    this.floor = 0,
      this.MAXFLOOR = 10,
      this.requests = [],
      this.direction = "up",
      this.limitTop = 6,
      this.limitDown = -1,
      this.startInterval,
      this.waitingList = []
    this.passengers = []
  }

  start() {
    this.startInterval = setInterval(() => this.update(), SECOND)
  }

  stop() {
    clearInterval(this.startInterval)
  }

  update() {
    this.log();
    this.floorUp()
    if (this.waitingList.length === 0) {
      console.log("No hay nadie en el waitingList")
    } else if (this.waitingList[0].originFloor === this.floor) {
      console.log(this.waitingList[0].originFloor);
      this._passengersEnter()
      for (var i = this.requests.length - 1; i >= 0; i--) {
        if (this.requests[i] === this.floor) {
          this.requests.splice(i, 1);
        }
      }
    }
    if (this.passengers.length === 0) {
      console.log("No hay nadie en el elevator")
    } else if (this.passengers[0].destinationFloor === this.floor) {
      this._passengersLeave()
    }
  }

  _passengersEnter() {
    for (var i = this.waitingList.length - 1; i >= 0; i--) {
      if (this.waitingList[i].originFloor === this.floor) {
        this.passengers.push(this.waitingList[i])
        console.log(`Se ha incorporado ${this.waitingList[0].name} en el elevator en el ${this.floor}`)
        this.waitingList.splice(i, 1);
      }
    }
  }

  _passengersLeave() {
    for (var i = this.passengers.length - 1; i >= 0; i--) {
      if (this.passengers[i].destinationFloor === this.floor) {
        console.log(`Se ha bajado ${this.passengers[0].name} del elevator en el ${this.floor}`)
        this.passengers.splice(i, 1);
        if (this.requests.length === 0) {
          this.stop()
        }
      }
    }
  }

  floorUp() {
    if (this.floor < this.limitTop) {
      this.floor++;
      this.direction = 'up';
    }
  }


  floorDown() {
    if (this.floor > this.limitDown) {
      this.floor--;
      this.direction = 'down';
    }
  }
  call(person) {
    this.waitingList.push(person)
    this.requests.push(person.originFloor)
    console.log(`${this.waitingList[0].name} espera al elevator el el piso ${person.originFloor}`)
  }

  log() {
    console.log(`Direction: ${this.direction} | Floor: ${this.floor}`);
  }
}

module.exports = Elevator;
