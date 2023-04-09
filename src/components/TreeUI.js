import {SINGLE_NODE} from "../models/Node";
import {NodeUI} from "./NodeUI";
import React, {useReducer} from "react";


const initialNode = SINGLE_NODE


export function TreeUI() {


    const [tree, dispatch] = useReducer((node, action) => node.dispatcher(action), initialNode);

    return [
        <ButtonUI text="+ Group" onClick={() => dispatch({type: "addNode"})}/>,
        <NodeUI node={tree} stateOnChange={action => dispatch(action)}/>
    ]
}

export function ButtonUI({text, onClick}) {
    return (
        <div>
            <button onClick={onClick}>{text}</button>
        </div>
    )
}