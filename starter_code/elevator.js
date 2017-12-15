const Person = require('./person.js');
const SECOND = 1000;

class Elevator {
  constructor(){
    this.floor      = 0,
    this.MAXFLOOR   = 10,
    this.requests   = [],
    this.direction  = "up",
    this.limitTop   = 6,
    this.limitDown   = -1,
    this.startInterval,
    this.waitingList = []
    this.passengers = []
  }

  start() {
    this.startInterval = setInterval(() => this.update(), SECOND)
  }

  stop() {
    clearInterval(startInterval)
  }

  update() {this.log();}
  _passengersEnter() { }
  _passengersLeave() { }

  floorUp() {
    if(this.floor < this.limitTop){
      this.floor ++;
      this.direction = 'up';
      if (this.request.includes(this.floor))
    }
  }

  floorDown() {
    if(this.floor > this.limitDown) {
      this.floor --;
      this.direction = 'down';
    }
  }
  call(person, originFloor) {
    this.waitingList.push(person)
    this.requests.push(originFloor)
   }

  log() {
    console.log(`Direction: ${this.direction} | Floor: ${this.floor}`);
  }
}

module.exports = Elevator;
