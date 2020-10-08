import React from 'react';
import './App.css';
import Title from "./components/Title/Title";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlus, faTrash} from '@fortawesome/free-solid-svg-icons'
import MaterialListing from "./components/MaterialListing/MaterialListing";

function App() {
    return (
        <div className="App">
            <Title title='Materials'/>
            {/* @TODO potentially move this to Materials Bin */}

            <div className='MaterialsContainer'>
                <MaterialListing />
            </div>
        </div>
    );
}

export default App;
