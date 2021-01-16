import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import React from "react";
import Item from "./Item";

import SolarPanels from './assets/Desktop-SolarPanels.jpeg'
import SolarRoof from './assets/Desktop-SolarRoof.jpeg'
import ModelS from './assets/Desktop-ModelS.jpeg'
import ModelX from './assets/Desktop-ModelX.jpeg'
import ModelY from './assets/Desktop-ModelY.jpeg'
import Model3 from './assets/Desktop-Model3.jpeg'


function App() {
    return (
        <>
            <Header/>
            <div className="item-container">
                <Item background={SolarPanels}/>
                <Item background={SolarRoof}/>
                <Item background={ModelS}/>
                <Item background={ModelX}/>
                <Item background={Model3}/>
                <Item background={ModelY}/>
            </div>
        </>
    );
}

export default App;
