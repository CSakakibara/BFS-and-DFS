function getCenter(element) {
    var x = element.getBoundingClientRect().x + element.getBoundingClientRect().width / 2
    var y = element.getBoundingClientRect().y + element.getBoundingClientRect().height / 2

    return { x, y }
}

function getDistance(positionA, positionB) {
    return Math.sqrt(((positionA.x - positionB.x) ** 2) + ((positionA.y - positionB.y) ** 2))
}

function getMiddlePoint(positionA, positionB) {
    var positionC = {
        x: (positionA.x + positionB.x) / 2,
        y: (positionA.y + positionB.y) / 2
    }
    return positionC
}

function getAngle(positionA, positionB) {
    var h = getDistance(positionA, positionB)
    var x1 = positionA.x
    var x2 = positionB.x
    var y1 = positionA.y
    var y2 = positionB.y
    var pi = Math.PI
    if ((x1 - x2 >= 0) && (y1 - y2 >= 0)) { //primeiro quadrante
        return (Math.asin((y1 - y2) / h))
    } else if ((x1 - x2 < 0) && (y1 - y2 >= 0)) {//segundo quadrante
        return (pi - Math.asin(Math.abs(y1 - y2) / h))
    } else if ((x1 - x2 <= 0) && (y1 - y2 < 0)) {// terceiro quadrante
        return (pi + Math.asin(Math.abs(y1 - y2) / h))
    } else if ((x1 - x2 > 0) && (y1 - y2 < 0)) {//quarto quadrante
        return (2 * pi - Math.asin(Math.abs(y1 - y2) / h))
    }
}

function makeLine(elementA, elementB) {
    var centerPositionA = getCenter(elementA)
    var centerPositionB = getCenter(elementB)
    var width = getDistance(centerPositionA, centerPositionB)
    var middlePoint = getMiddlePoint(centerPositionA, centerPositionB)
    var left = middlePoint.x - width/2
    var top = middlePoint.y
    var rad = getAngle(centerPositionA, centerPositionB)

    var line = document.createElement("div")
    line.style.width = width + "px"
    line.style.height = "2px"
    line.style.background = "black"
    line.style.position = "absolute"
    line.style.top = top + "px"
    line.style.left = left + "px"
    line.style.transform = `rotate(${rad}rad)`

    document.body.appendChild(line)
}
