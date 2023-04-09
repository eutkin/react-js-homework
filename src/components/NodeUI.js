import {LeafUI} from "./LeafUI";
import {Leaf} from '../models/Leaf';
import React from "react";
import {ButtonUI} from "./TreeUI";

export function NodeUI({node, stateOnChange}) {

    return (
        <ul>
            {
                node.children
                    .map(child => {
                        if (child instanceof Leaf) {
                            return (<li key={child.id}>
                                <span>
                                    <LeafUI leaf={child}/>
                                    <ButtonUI text="+ Line" onClick={() => stateOnChange({type: "addLeaf"})}/>
                                    <ButtonUI text="- Line"
                                              onClick={() => stateOnChange({type: "removeLeaf", leafId: child.id})}/>
                                </span>
                            </li>)
                        } else {
                            return <NodeUI node={child} stateOnChange={stateOnChange}/>
                        }
                    })
            }
        </ul>
    )
}