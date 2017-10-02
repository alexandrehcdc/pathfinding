'use strict'

const Node = require('./nodes')

function neighbourCost(weight, neighbour) {
    return {node: neighbour.node, cost: neighbour.path + weight}
}

async function bestPath (weight, neighbours) {
    let nextJump
    neighbours.map(node => {
        let result = neighbourCost(weight, node.path)
        if (result.cost < nextJump.cost) nextJump = result        
    })
    return nextJump
}
let node = new Node()
let network = node.generateNetwork()
console.log(network)