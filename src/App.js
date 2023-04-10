import logo from './logo.svg';
import './App.css';
import {NodeUI} from "./tree/components/NodeUI";
import {useReducer, useState} from "react";
import {Node, SINGLE_NODE} from "./tree/state/Node";
import {TreeUI} from "./tree/components/TreeUI";

const initialState = new Node()

function App() {



    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <TreeUI/>
            </header>
        </div>
    );
}

export default App;
