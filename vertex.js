class Vertex{
    constructor(id, title, circle){
        this.id = id
        this.title = title
        this.circle = circle
        this.neighbors = []
        this.parent = null
        this.distance = "∞"
    }
}