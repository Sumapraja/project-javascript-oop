class Car {
    constructor(owner = 'Unknown Owner', name = 'Unknown Name') {
      this.owner = owner
      this.name = name
    }
  
    drive() {
      console.log(
        `The ${this.name} car owned by ${this.owner} drives on the road`
      )
    }
  
    getOwner() {
      return this.owner
    }
  
    getOwner() {
      return this.name
    }
  }
  