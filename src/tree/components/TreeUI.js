import {useReducer} from "react";
import {SINGLE_NODE} from "../state/Node";
import {NodeUI} from "./NodeUI";

const TreeUI = () => {

    const [node, dispatch] = useReducer((node, action) => {
        switch (action.type) {
            case 'addLeaf':
                return node.addLeaf();

            case 'addNode' :
                return node.addNode();

            default:
                return node
        }
    }, SINGLE_NODE)

    console.log("TreeUI", node)

    return <NodeUI isRoot={true} initialNode={node} onChange={dispatch}/>
}

export {TreeUI}