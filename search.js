let action = false
let queue = new Array()

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
        await sleep(2000)
        selectedVertex.circle.style.background = "dimgray"
        add2Queue(selectedVertex) //passando o vertex pra fila
        while (queue.length > 0) {
            let marking = firstInQueue() //guardando o vertex antes de tirar da fila
            remove2Queue() //tira da fila
            marking.neighbors.forEach(async (item) => { //analisa vizinhos para colocar na fila
                if (item.circle.style.background == "white none repeat scroll 0% 0%") { //se ainda não foi verificado
                    item.parent = marking
                    item.distance = marking.distance + 1
                    item.circle.style.background = "dimgray" //marca como verificado
                    item.title.innerText = item.distance //mostra a distancia
                    add2Queue(item) //adiciona na fila
                }
            })
            await sleep(2000)
            marking.circle.style.background = "black" //marca como já finalizado
        }
    }
}
