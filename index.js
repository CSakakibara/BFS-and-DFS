let vertexA = new Vertex(document.querySelector("#A .title"), document.querySelector("#A .circle"), document.querySelector("#A .f"))
let vertexB = new Vertex(document.querySelector("#B .title"), document.querySelector("#B .circle"), document.querySelector("#B .f"))
let vertexC = new Vertex(document.querySelector("#C .title"), document.querySelector("#C .circle"), document.querySelector("#C .f"))
let vertexD = new Vertex(document.querySelector("#D .title"), document.querySelector("#D .circle"), document.querySelector("#D .f"))
let vertexE = new Vertex(document.querySelector("#E .title"), document.querySelector("#E .circle"), document.querySelector("#E .f"))
let vertexF = new Vertex(document.querySelector("#F .title"), document.querySelector("#F .circle"), document.querySelector("#F .f"))
let vertexG = new Vertex(document.querySelector("#G .title"), document.querySelector("#G .circle"), document.querySelector("#G .f"))
let vertexH = new Vertex(document.querySelector("#H .title"), document.querySelector("#H .circle"), document.querySelector("#H .f"))

vertexA.neighbors = [vertexB, vertexE]
vertexB.neighbors = [vertexA, vertexF]
vertexC.neighbors = [vertexD, vertexF, vertexG]
vertexD.neighbors = [vertexC, vertexH]
vertexE.neighbors = [vertexA]
vertexF.neighbors = [vertexB, vertexC, vertexG]
vertexG.neighbors = [vertexC, vertexD, vertexF, vertexH]
vertexH.neighbors = [vertexD, vertexG]

makeLine(vertexA.circle, vertexB.circle)
makeLine(vertexA.circle, vertexE.circle)
makeLine(vertexB.circle, vertexF.circle)
makeLine(vertexF.circle, vertexC.circle)
makeLine(vertexC.circle, vertexG.circle)
makeLine(vertexF.circle, vertexG.circle)
makeLine(vertexC.circle, vertexD.circle)
makeLine(vertexD.circle, vertexH.circle)
makeLine(vertexG.circle, vertexH.circle)


// associar objetos e elementos
function findVertexByTitle(title) {
    switch (title.innerText) {
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