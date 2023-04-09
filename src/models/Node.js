import {Leaf} from "./Leaf";

export class Node {

    children

    constructor(children) {
        this.children = children
    }

    dispatcher(action) {
        console.log(action)
        switch (action.type) {
            case "addLeaf":
                return this.#addLeaf();
            case "removeLeaf" :
                return this.#removeLeaf(action.leafId);
            case "addNode":
                return this.#addNode()
            default:
                return this
        }
    }

    #addLeaf(leafId) {
        return new Node([
            ...this.children,
            new Leaf("hello")
        ])
    }

    #removeLeaf(leafId) {
        if (this.children.length === 0) {
            return new Node([])
        }
        return new Node(
            [...this.children]
                .filter(child => child instanceof Leaf && child.id !== leafId)
        )
    }

    #addNode() {
        return new Node([
            ...this.children,
            new Node([new Leaf("hello")])
        ])
    }
}

export const SINGLE_NODE = new Node([new Leaf("hello")])
