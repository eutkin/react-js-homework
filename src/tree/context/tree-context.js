import React from "react";
import {TextUI} from "../../components/TextUI";

export const TreeContext = React.createContext((text) => <TextUI text={text}/>);