'use strict'

function random (low, high) {
    return Math.random() * (high - low) + low;
}

module.exports = random