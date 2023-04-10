// noinspection JSCheckFunctionSignatures

import {LeafUI} from "./LeafUI";
import {Leaf} from '../state/Leaf';
import React, {useReducer, useState} from "react";


function NodeUI({isRoot, initialNode, onChange, level}) {

    const [currentNode, dispatch] = useReducer((node, action) => {
            switch (action.type) {
                case 'addLeaf':
                    return node.addLeaf();

                case 'addNode' :
                    return node.addNode();

                default:
                    return node
            }
        },
        initialNode
    )


    let currentLevel = level || 0

    console.log("NodeUI", currentLevel, currentNode)

    if (currentNode.isEmpty()) {
        if (isRoot) { // it's root node, and we must have any button for add leaf
            return renderLastLineButton()
        }
        return [] // it's child node, and we don't have redundant buttons
    }

    return [
        <ButtonUI text={'+'} onClick={() => {
            onChange({type: 'addLeaf'})
            dispatch({type: 'addLeaf'})

        }}/>,
        <ButtonUI text={'++'} onClick={() => {
            onChange({type: 'addNode'})
            dispatch({type: 'addNode'})
        }}/>,
        <ul>
            {
                currentNode
                    .map((child) => {
                        if (child instanceof Leaf) {
                            return renderLeaf(child)
                        }
                        return <NodeUI isRoot={false} initialNode={child} onChange={dispatch} level={currentLevel + 1}/>

                    })
            }
        </ul>,
        renderLastLineButton()
    ]

}


function renderLeaf(child) {
    return <li key={child.id}><LeafUI leaf={child}/></li>
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