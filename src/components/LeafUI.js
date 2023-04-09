import {TreeContext} from "../contexts/tree-context";
import {useContext} from "react";

export function LeafUI({leaf}) {

    const contentProvider = useContext(TreeContext)

    return (
        <div>{contentProvider(leaf.content)}</div>
    )
}
