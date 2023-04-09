export class Leaf {

    constructor(content, id) {
        this.content = content
        this.id = id | Math.floor(Math.random() * 100_000_000)
        console.log(this)
    }

}