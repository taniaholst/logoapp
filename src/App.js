import React from 'react';
import './App.css';
import ListOfImages from "./technologies/images";
import {Input} from "nav-frontend-skjema";
import docker from './technologies/images/docker.png';
import {Hovedknapp, Knapp} from "nav-frontend-knapper";

function App() {
    return (
        <div className="App">
            <img src={docker} className="logo-container"/>

            <Input/>
            <Knapp>Hopp over</Knapp>
            <Hovedknapp>Bekreft</Hovedknapp>


        </div>
    );
}

export default App;
