// noinspection JSCheckFunctionSignatures

import {LeafUI} from "./LeafUI";
import {Leaf} from '../state/Leaf';
import React from "react";


function NodeUI({isRoot, node, onChange, level}) {

    if (node.isEmpty()) {
        if (isRoot) { // it's root node, and we must have any button for add leaf
            return renderLastLineButton()
        }
        return [] // it's child node, and we don't have redundant buttons
    }

    return [
        <ButtonUI text={'+'} onClick={() => {
            onChange({type: 'addLeaf', id: node.id})
        }}/>,
        <ButtonUI text={'++'} onClick={() => {
            onChange({type: 'addNode', id: node.id})
        }}/>,
        <ul id = {node.id}>
            {
                node
                    .map((child) => {
                        if (child instanceof Leaf) {
                            return renderLeaf(child)
                        }
                        return <NodeUI isRoot={false} node={child} onChange={onChange} level={level + 1}/>
                    })
            }
        </ul>,
        renderLastLineButton()
    ]

}


function renderLeaf(child) {
    return <li key={child.id} id = {child.id}><LeafUI leaf={child}/></li>
}

function renderNode(child, onChange) {

}

function renderLastLineButton() {
    return []
}

function ButtonUI({text, onClick}) {
    return (
        <div>
            <button onClick={onClick}>{text}</button>
        </div>
    )
}

export {NodeUI}