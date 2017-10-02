'use strict'

function random (low, high) {
    return Math.ceil(Math.random() * (high - low) + low)
}

module.exports = random