//conectar vertices
let elementA = { circle: document.querySelector("#A .circle"), title: document.querySelector("#A .title") }
let elementB = { circle: document.querySelector("#B .circle"), title: document.querySelector("#B .title") }
let elementC = { circle: document.querySelector("#C .circle"), title: document.querySelector("#C .title") }
let elementD = { circle: document.querySelector("#D .circle"), title: document.querySelector("#D .title") }
let elementE = { circle: document.querySelector("#E .circle"), title: document.querySelector("#E .title") }
let elementF = { circle: document.querySelector("#F .circle"), title: document.querySelector("#F .title") }
let elementG = { circle: document.querySelector("#G .circle"), title: document.querySelector("#G .title") }
let elementH = { circle: document.querySelector("#H .circle"), title: document.querySelector("#H .title") }


makeLine(elementA.circle, elementB.circle)
makeLine(elementA.circle, elementE.circle)
makeLine(elementB.circle, elementF.circle)
makeLine(elementF.circle, elementC.circle)
makeLine(elementC.circle, elementG.circle)
makeLine(elementF.circle, elementG.circle)
makeLine(elementC.circle, elementD.circle)
makeLine(elementD.circle, elementH.circle)
makeLine(elementG.circle, elementH.circle)

//instanciar objetos

let vertexA = new Vertex("A", [], null)
let vertexB = new Vertex("B", [], null)
let vertexC = new Vertex("C", [], null)
let vertexD = new Vertex("D", [], null)
let vertexE = new Vertex("E", [], null)
let vertexF = new Vertex("F", [], null)
let vertexG = new Vertex("G", [], null)
let vertexH = new Vertex("H", [], null)

vertexA.neighbors = [vertexB, vertexE]
vertexB.neighbors = [vertexA, vertexF]
vertexC.neighbors = [vertexD, vertexF, vertexG]
vertexD.neighbors = [vertexC, vertexG]
vertexE.neighbors = [vertexA]
vertexF.neighbors = [vertexB, vertexC, vertexG]
vertexG.neighbors = [vertexC, vertexD, vertexF]
vertexH.neighbors = [vertexD, vertexG]

// associar objetos e elementos
function elementToVertex(element) {
    switch (element) {
        case "A":
            return vertexA
        case "B":
            return vertexB
        case "C":
            return vertexC
        case "D":
            return vertexD
        case "E":
            return vertexE
        case "F":
            return vertexF
        case "G":
            return vertexG
        case "H":
            return vertexH
    }
}

function vertexToElement(vertex) {
    switch (vertex.title) {
        case "A":
            return elementA
        case "B":
            return elementB
        case "C":
            return elementC
        case "D":
            return elementD
        case "E":
            return elementE
        case "F":
            return elementF
        case "G":
            return elementG
        case "H":
            return elementH
    }
}