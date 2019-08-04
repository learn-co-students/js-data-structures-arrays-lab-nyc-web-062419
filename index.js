// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
    drivers.push(name)
}

function destructivelyPrependDriver(name) {
    drivers.unshift(name)
}

function destructivelyRemoveLastDriver() {
    drivers.pop()
}
function destructivelyRemoveFirstDriver() {
    drivers.shift()
}

function appendDriver(name) {
    const newArr = [...drivers, name]
    return newArr
}

function prependDriver(name) {
    const new1 = [name, ...drivers]
    return new1
}

function removeLastDriver() {
    const newArr = [...drivers]
    newArr.splice(2, 1)
    return newArr
}

function removeFirstDriver() {
    const newArr = [...drivers]
    newArr.shift()
    return newArr
}