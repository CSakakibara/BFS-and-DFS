const frequency = 1000
let n = 1
let action = false
let queue = new Array()

function add2Queue(vertex) {
    queue[queue.length] = vertex
}
function remove2Queue() {
    queue.splice(0, 1)
}
function firstInQueue() {
    return queue[0]
}

function breadthFirstSearch() {
    //    var checkboxMarcado = document.querySelector("input[name=radio]:checked")
    //    var containerChecked = vertexChecked.parentElement()
    let selectedElement ={
        circle:  document.querySelector("input[name=radio]:checked ~ .circle"),
        text: document.querySelector("input[name=radio]:checked ~ .title")
    }
    let distance = 0
    let circleList = document.querySelectorAll("span.circle")
    circleList.forEach((item) => {
        item.style.background = "white"
    }) //todos começam em branco
    let aux = selectedElement.text.innerText // salva o nome do vertice selecionado
    let titleList = document.querySelectorAll("span.title")
    titleList.forEach((item) => {
        item.innerText = "∞"
    }) //todos começam com distancia infinito
    selectedElement.text.innerText = distance //distancia 0 no vertice selecionado
    setTimeout(() => {
        selectedElement.circle.style.background = "dimgray"
        add2Queue(elementToVertex(aux)) //passando o vertex pra fila
    }, frequency * n)//vertice selecionado é indicado em cinza e adicionado a fila
    n = n + 1

        while (queue.length > 0) {
                let marking = firstInQueue() //guardando o vertex antes de tirar da fila
                remove2Queue()
                distance = distance + 1
                marking.neighbors.forEach((item) => {
                    let elementNeighbor = vertexToElement(item)
                    if (elementNeighbor.circle.style.background == "white none repeat scroll 0% 0%") {
                        item.circle.style.background = "dimgray"
                        item.title.innerText = distance
                        add2Queue(item)
                    }
                })
                vertexToElement(marking).circle.style.background = "black"
        }

}

function resetVertexes(){
    location.reload()
}