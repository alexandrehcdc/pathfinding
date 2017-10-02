'use strict'

function createNode({node, value, neighbours} = {}) {
    return {node: node, value: value, neighbours: neighbours}
}

async function neighbourCost(weight, neighbour) {
    return {node: neighbour.node, cost: neighbour.path + weight}
}

async function bestPath (weight, neighbours) {
    let nextJump
    neighbours.map(node => {
        let result = await neighbourCost(weight, node.path)
        if (result.cost < nextJump.cost) nextJump = result        
    })
    return nextJump
}