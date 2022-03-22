// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    return cats.push(name)
}

function destructivelyPrependCat(name) {
    return cats.unshift(name)
}

function destructivelyRemoveLastCat() {
    return cats.splice([2])
}

function destructivelyRemoveFirstCat() {
    return cats.splice([0],[1])
}

function appendCat(name) {
    let appenedCats = [...cats, name]
    return appenedCats
}

function prependCat(name) {
    let prependCat = [name, ...cats]
    return prependCat
}

function removeLastCat() {
    let removedCat = [...cats.slice([0], [2])]
    return removedCat
}

function removeFirstCat() {
    let removedFirstCat = [...cats.slice([1])]
    return removedFirstCat
}