'use strict'

const {random} = require('./util')

const names = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']

class Node {
    constructor(node, value, neighbours) {
        this.node = node,
        this.value = value,
        this.neighbours = neighbours
    }
}

Node.prototype.generateNetwork = () => {
    let network
    names.map(key => {
        network.push({
            node: key,
            value: random(5,50)
        })
    })
    return network
}

Node.prototype.generateLink = () => {
    
}

module.exports = Node