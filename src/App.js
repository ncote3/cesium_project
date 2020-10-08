import React from 'react';
import './App.css';
import Title from "./components/Title/Title";
import MaterialsBin from "./components/MaterialsBin/MaterialsBin";

function App() {
    return (
        <div className="App">
            <Title title='Materials'/>
            <MaterialsBin />
        </div>
    );
}

export default App;
