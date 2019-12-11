let action = false
let queue = new Array()
const frequency = 1000
let time = 0

function resetVertexes() {
    location.reload()
}

function checkVertex(vertexTitle) {
    let vertexToCheck = document.querySelector(`#${vertexTitle} input`)
    vertexToCheck.checked = true
}

function add2Queue(vertex) {
    queue[queue.length] = vertex
}
function remove2Queue() {
    queue.splice(0, 1)
}
function firstInQueue() {
    return queue[0]
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function breadthFirstSearch() {
    if (action == false) {
        action = true
        //    var containerChecked = vertexChecked.parentElement()
        let selectedVertex = findVertexByTitle(document.querySelector("input[name=radio]:checked ~ .title").innerText)
        let circleList = document.querySelectorAll("span.circle") // seleciona todos os circulos
        circleList.forEach((item) => {
            item.style.background = "white"
        }) //todos começam em branco
        let titleList = document.querySelectorAll("span.title") //seleciona todas as letras
        titleList.forEach((item) => {
            item.innerText = findVertexByTitle(item.innerText).distance
        }) //exibe a distancia inicial infinito para todos os vertices
        selectedVertex.distance = 0
        selectedVertex.title.innerText = selectedVertex.distance  //distancia 0 no vertice selecionado
        await sleep(frequency)
        selectedVertex.circle.style.background = "dimgray"
        add2Queue(selectedVertex) //passando o vertex pra fila
        while (queue.length > 0) {
            let marking = firstInQueue() //guardando o vertex antes de tirar da fila
            remove2Queue() //tira da fila
            for (i = 0; i < marking.neighbors.length; i++) { //analisa vizinhos para colocar na fila
                if (marking.neighbors[i].circle.style.background == "white none repeat scroll 0% 0%") { //se ainda não foi verificado
                    marking.neighbors[i].parent = marking
                    marking.neighbors[i].distance = marking.distance + 1
                    await sleep(frequency)
                    marking.neighbors[i].circle.style.background = "dimgray" //marca como verificado
                    marking.neighbors[i].title.innerText = marking.neighbors[i].distance //mostra a distancia
                    add2Queue(marking.neighbors[i]) //adiciona na fila
                }
            }
            await sleep(frequency)
            marking.circle.style.background = "black" //marca como já finalizado
        }
    }
}

function dfsVisit(vertex) {
    vertex.circle.style.background = "dimgray"
    time = time + 1
    vertex.title.innerText = time
    for (i = 0; i < vertex.neighbors.length; i++) {
        if (vertex.neighbors[i].circle.style.background == "white none repeat scroll 0% 0%") {
            vertex.neighbors[i].parent = vertex
            dfsVisit(vertex.neighbors[i])
        }
    }
    vertex.circle.style.background = "black"
    time = time + 1
    vertex.f.innerText = time
}

function depthFirstSearch() {
    if (action == false) {
        action = true
        selectedVertex = findVertexByTitle(document.querySelector("input[name=radio]:checked ~ .title").innerText)
        let circleList = document.querySelectorAll("span.circle") // seleciona todos os circulos
        circleList.forEach((item) => {
            item.style.background = "white"
        })
        let titleList = document.querySelectorAll("span.title")
        let idList = []
        for (i = 0; i < titleList.length; i++) {
            idList[i] = titleList[i].innerText
        }
        dfsVisit(selectedVertex)
        for (i = 0; i < idList.length; i++) {
            let vertex = findVertexByTitle(idList[i])
            if (vertex.circle.style.background == "white none repeat scroll 0% 0%") {
                dfsVisit(vertex)
            }
        }
        time = 0
    }

}

