class AgentsTeam {
    constructor({name, initialTeam, lastTeam}) {
        this.name = name
        this.initialTeam = initialTeam
        this.lastTeam = lastTeam
    }
    move() {
        console.log(
            `${this.name} has decided to move out from ${this.initialTeam} to ${this.lastTeam}`
        )
    }
    getName() {
        return this.name
    }
    getlastTeam() {
        return this.lastTeam
    }
    getinitialTeam() {
        return this.initialTeam
    }
}
const freeAgentsTeam = new AgentsTeam({
    name: 'KD',
    initialTeam: 'Warriors',
    lastTeam: 'Nets'
})
console.log(freeAgentsTeam)
freeAgentsTeam.move()
console.log(freeAgentsTeam.getinitialTeam())
console.log(freeAgentsTeam.getlastTeam())

class AgentsContract extends AgentsTeam {
    constructor({ name, initialTeam, lastTeam, year, contract }) {
        super({name, initialTeam, lastTeam})
        this.year = year
        this.contract = contract
    }
    contracts() {
        console.log(`${this.name} has decided to move out from ${this.initialTeam} to ${this.lastTeam} for a ${this.year} year(s) ${this.getContract()} contracts`);

    }
    getYear() {
        return this.year
    }

    getContract() {
        const formattedcontract = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0
        }).format(this.contract)

        return formattedcontract
    }
}

const freeAgentsContract = new AgentsContract({
    name: 'KD',
    initialTeam: 'Warriors',    
    lastTeam: 'Nets',
    year: 4,
    contract: 141000000
})

console.log(freeAgentsContract);
freeAgentsContract.contracts();
console.log(freeAgentsContract.getYear());
console.log(freeAgentsContract.getContract());


//---------------exim--------------

let greeting = require('./export')

console.log(greeting('jiji'));

// import sayHello from './export'

// sayHello('Alpha')

// ---------------async / await --------

