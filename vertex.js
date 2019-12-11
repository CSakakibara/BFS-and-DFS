class Vertex {
    constructor(title, circle, f) {
        this.title = title
        this.circle = circle
        this.neighbors = []
        this.parent = null
        this.distance = "∞"
        this.f = f
    }
}