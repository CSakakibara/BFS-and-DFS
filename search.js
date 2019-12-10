function breadthFirstSearch() {
    //    var checkboxMarcado = document.querySelector("input[name=radio]:checked")
    //    var containerChecked = vertexChecked.parentElement()
        let vertexChecked = document.querySelector("input[name=radio]:checked ~ .circle")
        let checkedVertexText = document.querySelector("input[name=radio]:checked ~ .title")
        let selectedVertexTitle = checkedVertexText.innerHTML
        checkedVertexText.innerHTML = "B"
        vertexChecked.style.background = "white"
    }
