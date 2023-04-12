import {Leaf} from "./Leaf";

export class Node {

    #children

    #version

    id

    #childMap

    constructor(id, version, children, childMap) {
        this.id = id || Math.floor(Math.random() * 100_000_000)
        this.#version = version || 0
        this.#children = children || []
        this.#childMap = {...(childMap || {}), [this.id]: this}
    }

    addChild(id, updateNode) {
        let currentNode = this.deepCopy();
        updateNode(currentNode.#childMap[id])
        currentNode.#version++
        return new Node(currentNode.id, currentNode.#version, currentNode.#children, currentNode.#childMap)
    }

    map(mapFunction) {
        return this.#children.map((child, index) => mapFunction(child, index))
    }

    isEmpty() {
        return this.#children.length === 0
    }

    addLeaf() {
        const leaf = new Leaf("hello");
        this.#children.push(leaf)
        this.#childMap[leaf.id] = leaf
        this.#version++
        return this
    }

    addNode() {
        let node = new Node().addLeaf()
        this.#children.push(node)
        this.#childMap[node.id] = node
        this.#childMap = {...this.#childMap, ...node.#childMap}
        this.#version++
        return this

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

    deepCopy() {
        const children = this.#children.map(child => {
            if (child instanceof Leaf) {
                return new Leaf(child.content, child.id)
            }
            return child.deepCopy()
        })
        const childMap = flatten(children).reduce((acc, element) => ({...acc, [element.id]: element}), {})
        return new Node(this.id, this.#version, children, childMap)
    }

    children() {
        return this.#children
    }
}

export const SINGLE_NODE = new Node(null, null).addLeaf()

function flatten(children) {
    const result = []
    children.forEach(child => {
            if (child instanceof Leaf) {
                result.push(child)
                return
            }
            result.push(child)
            result.push(...flatten(child.children()))
        }
    )
    return result
}