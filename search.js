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
    selectedVertex = findVertexById(document.querySelector("input[name=radio]:checked ~ .title"))
    let circleList = document.querySelectorAll("span.circle") // seleciona todos os circulos
    circleList.forEach((item) => {
        item.style.background = "white"
    }) //todos começam em branco
   // let aux = selectedElement.title.innerText // salva o nome do vertice selecionado
    let titleList = document.querySelectorAll("span.title") //seleciona todas as letras
    titleList.forEach((item) => {
        item.innerText = findVertexById(item).distance
    }) //exibe a distancia inicial infinito para todos os vertices
    selectedVertex.distance = 0
    selectedVertex.title.innerText = selectedVertex.distance  //distancia 0 no vertice selecionado
   // setTimeout(() => {
        selectedVertex.circle.style.background = "dimgray"
        add2Queue(selectedVertex) //passando o vertex pra fila
    //}, frequency * n)//vertice selecionado é indicado em cinza e adicionado a fila
    n = n + 1
   // setTimeout(() => {
        while (queue.length > 0) {
            let marking = firstInQueue() //guardando o vertex antes de tirar da fila
            remove2Queue() //tira da fila
            marking.neighbors.forEach((item) => { //analisa vizinhos para colocar na fila
                if (item.circle.style.background == "white none repeat scroll 0% 0%") { //se ainda não foi verificado
                    item.circle.style.background = "dimgray" //marca como verificado
                    item.distance = marking.distance + 1
                    item.title.innerText = item.distance //mostra a distancia
                    item.parent = marking
                    add2Queue(item) //adiciona na fila
                }
            })
            marking.circle.style.background = "black" //marca como já finalizado
        }
  //  }, frequency * n)

}

function resetVertexes() {
    location.reload()
}