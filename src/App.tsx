import React from 'react';
import './App.css';
import Dropdown, {DropdownTrigger, DropdownContent} from "./Dropdown/index";
import {Component1, Component2, Component3} from "./components/index";
import {Trigger1, Trigger2, Trigger3} from "./triggers/index";

function App() {
  return (

    <div className="App">
        <Dropdown>
            <DropdownTrigger>
                <Trigger1/>
            </DropdownTrigger>
            <DropdownContent>
                <Component1/>
            </DropdownContent>
        </Dropdown>
        <Dropdown>
            <DropdownTrigger>
                <Trigger2/>
            </DropdownTrigger>
            <DropdownContent>
                <Component2/>
            </DropdownContent>
        </Dropdown>
        <Dropdown>
            <DropdownTrigger>
                <Trigger3/>
            </DropdownTrigger>
            <DropdownContent>
                <Component3/>
            </DropdownContent>
        </Dropdown>
    </div>
  );
}

export default App;
