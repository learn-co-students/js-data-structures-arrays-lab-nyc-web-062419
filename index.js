// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name){
 drivers.push(name);
}

function destructivelyPrependDriver(name){
    drivers.unshift(name)
}

function destructivelyRemoveLastDriver(){
    drivers.pop()
}

function destructivelyRemoveFirstDriver(){
    drivers.shift(1)
}

function appendDriver(name){
    const addDriver = [...drivers, name]
        return addDriver
    }

function prependDriver(name){
    const addDriver = [name, ...drivers]
        return addDriver
    }

 function removeLastDriver(){
     const lastremoved = drivers.slice(0, drivers.length -1)
     return lastremoved
 }

 function removeFirstDriver(){
    const firstremoved = drivers.slice(1)
    return firstremoved
}
