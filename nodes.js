'use strict'

const random = require('./util')

const names = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']

function Node () {

}

Node.prototype.create = function create(node, value, neighbours, x, y) {
    this.node = node,
    this.coordinates.x = x
    this.coordinates.y = y
    this.value = value
    return this
}

Node.prototype.generateNetwork = function generateNetwork() {
    let network = []
    names.map(key => {
        network.push(
        {
            node: key,
            value: random(5,50),
            coordinates: {
                x : random(0,800),
                y : random(0,600)
            }
        })
    })
    return network
}

module.exports = Node