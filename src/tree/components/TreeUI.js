import {useReducer} from "react";
import {Node, SINGLE_NODE} from "../state/Node";
import {NodeUI} from "./NodeUI";

const TreeUI = () => {

    const [node, dispatch] = useReducer((node, action) => {
        switch (action.type) {
            case 'addLeaf':
                return node.addChild(action.id, node => node.addLeaf())

            case 'addNode' :
                return node.addChild(action.id, node => node.addNode())

            default:
                return node
        }
    }, SINGLE_NODE)

    console.log("TreeUI", node)

    return <NodeUI isRoot={true} node={node} onChange={dispatch} level={0}/>
}

export {TreeUI}