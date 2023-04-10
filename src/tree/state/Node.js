import {Leaf} from "./Leaf";

export class Node {

    #children

    constructor(children = []) {
        this.#children = children
    }

    lastNode() {
        let filter = this.#children.filter(child => child instanceof Node);
        return filter[filter.length - 1]
    }

    addChild(child) {
        return new Node([...this.#children, child])
    }

    map(mapFunction) {
        return this.#children.map((child, index) => mapFunction(child, index))
    }

    isEmpty() {
        return this.#children.length === 0
    }

    lastIndex() {
        return this.#children.length - 1
    }

    addLeaf() {
        return new Node([
            ...this.#children, new Leaf("hello")
        ])
    }

    removeLeaf(leafId) {
        if (this.#children.length === 0) {
            return this
        }
        let copy = [...this.#children]
        const leafIndex = copy.findIndex(child => child instanceof Leaf && child.id === leafId)
        copy.splice(leafIndex, 1)
        return new Node(copy)
    }

    addNode() {
        return new Node([
            ...this.#children,
            new Node([new Leaf("hello")])
        ])
    }
}

export const SINGLE_NODE = new Node([new Leaf("hello")])
