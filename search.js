let action = false
let queue = new Array()
const frequency = 1000

function resetVertexes() {
    location.reload()
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
        selectedVertex = findVertexById(document.querySelector("input[name=radio]:checked ~ .title"))
        let circleList = document.querySelectorAll("span.circle") // seleciona todos os circulos
        circleList.forEach((item) => {
            item.style.background = "white"
        }) //todos começam em branco
        let titleList = document.querySelectorAll("span.title") //seleciona todas as letras
        titleList.forEach((item) => {
            item.innerText = findVertexById(item).distance
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
