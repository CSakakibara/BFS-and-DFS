let vertexA = new Vertex("A" ,document.querySelector("#A .title") ,document.querySelector("#A .circle"))
let vertexB = new Vertex("B" ,document.querySelector("#B .title") ,document.querySelector("#B .circle"))
let vertexC = new Vertex("C" ,document.querySelector("#C .title") ,document.querySelector("#C .circle"))
let vertexD = new Vertex("D" ,document.querySelector("#D .title") ,document.querySelector("#D .circle"))
let vertexE = new Vertex("E" ,document.querySelector("#E .title") ,document.querySelector("#E .circle"))
let vertexF = new Vertex("F" ,document.querySelector("#F .title") ,document.querySelector("#F .circle"))
let vertexG = new Vertex("G" ,document.querySelector("#G .title") ,document.querySelector("#G .circle"))
let vertexH = new Vertex("H" ,document.querySelector("#H .title") ,document.querySelector("#H .circle"))

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
function findVertexById(title) {
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