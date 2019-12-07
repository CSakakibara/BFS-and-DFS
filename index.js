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


function makeLine(positionA, positionB) {
    var width = getDistance(positionA, positionB)
    var middlePoint = getMiddlePoint(positionA, positionB)
    var left = middlePoint.x - width/2
    var top = middlePoint.y
    var rad = getAngle(positionA, positionB)

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




var a = document.querySelector("#vertexA .checkmark")
var b = document.querySelector("#vertexB .checkmark")
var c = document.querySelector("#vertexC .checkmark")
var d = document.querySelector("#vertexD .checkmark")

var positionA = getCenter(a)
var positionB = getCenter(b)
var positionC = getCenter(c)
var positionD = getCenter(d)

makeLine(positionA, positionC)

function getAngle(positionD, positionC) {

    var x1 = positionD.x
    var x2 = positionC.x
    var y1 = positionD.y
    var y2 = positionC.y
    var pi = Math.PI
    var h = getDistance(positionD, positionC)
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

