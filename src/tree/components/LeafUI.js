import {TreeContext} from "../context/tree-context";
import {useContext} from "react";

export function LeafUI({leaf}) {

    const contentProvider = useContext(TreeContext)

    return (
        <div>{contentProvider(leaf.content)}</div>
    )
}
