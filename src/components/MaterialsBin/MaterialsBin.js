import React, {useState} from 'react';
import {makeUseAxios} from "axios-hooks";
import axios from "axios";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus, faTrash} from "@fortawesome/free-solid-svg-icons";
import MaterialDetails from "../MaterialDetails/MaterialsDetails";

const useAxios = makeUseAxios({
    axios: axios.create({baseURL: 'http://localhost:3100/'})
})

export default function MaterialsBin() {
    // @TODO look into date objects
    const defaultBackendObject = {
        "id": 1,
        "name": "New Material",
        "color": "#FFFFFF",
        "volume": 0,
        "cost": 0,
        "deliveryDate": "10-08-2020",
    }

    // eslint-disable-next-line no-unused-vars
    const [listingsRes, refetch] = useAxios('/materials/');
    const [details, setDetails] = useState({})

    // @TODO handleAddClick
    function handleAddClick(e) {
        e.preventDefault()
        console.log('Add Button Clicked')
    }

    // @TODO handleDeleteClick
    function handleDeleteClick(e)  {
        e.preventDefault()
        console.log('Delete Button Clicked')
    }

    function handleListingClick(listing, e)  {
        e.preventDefault()
        setDetails(listing)
    }



    if (listingsRes.loading) {
        return (
            <div className='MaterialsBin loading'>
                <div className='ActionButtons loading'>
                    <button onClick={handleAddClick} disabled={true}>
                        Add
                        <FontAwesomeIcon icon={faPlus}/>
                    </button>
                    <button onClick={handleDeleteClick} disabled={true}>
                        Delete
                        <FontAwesomeIcon icon={faTrash}/>
                    </button>
                </div>
                <div className='MaterialsList'>
                    <div className='MaterialsBin loading'>
                        <p><i>Loading Materials...</i></p>
                    </div>
                </div>
                <div className='MaterialsDetails loading'>

                </div>
            </div>
        )
    } else if (listingsRes.error) {
        return (
            <div className='MaterialsBin error'>
                <div className='ActionButtons error'>
                    <button onClick={handleAddClick} disabled={true}>
                        Add
                        <FontAwesomeIcon icon={faPlus}/>
                    </button>
                    <button onClick={handleDeleteClick} disabled={true}>
                        Delete
                        <FontAwesomeIcon icon={faTrash}/>
                    </button>
                </div>
                <div className='MaterialsList error'>
                    <div className='MaterialsBin error'>
                        <p><i>Error Loading Materials...</i></p>
                    </div>
                </div>
                <div className='MaterialsDetails error'>

                </div>
            </div>
        )
    } else {
        if (listingsRes.data === {} || listingsRes.data === undefined) {
            return (
                <div className='MaterialsBin empty'>
                    <div className='ActionButtons empty'>
                        <button onClick={handleAddClick}>
                            Add
                            <FontAwesomeIcon icon={faPlus}/>
                        </button>
                        <button onClick={handleDeleteClick} disabled={true}>
                            Delete
                            <FontAwesomeIcon icon={faTrash}/>
                        </button>
                    </div>
                    <div className='MaterialsList empty'>
                        <p><i>No Materials</i></p>
                    </div>
                    <div className='MaterialsDetails empty'>

                    </div>
                </div>
            )
        } else {
            return (
                <div className='MaterialsBin'>
                    <div className='ActionButtons'>
                        <button onClick={handleAddClick}>
                            Add
                            <FontAwesomeIcon icon={faPlus}/>
                        </button>
                        <button onClick={handleDeleteClick}>
                            Delete
                            <FontAwesomeIcon icon={faTrash}/>
                        </button>
                    </div>
                    <div className='MaterialsList'>
                        <ul>
                            {
                                listingsRes.data.map(listing => {
                                    const {name, color, volume} = listing;
                                    return (
                                        <li>
                                            <button onClick={handleListingClick(listing)}>
                                                <svg height='100' width='100'>
                                                    <circle cx='50' cy='50' r='40' fill={color}/>
                                                </svg>
                                                <div className='ListingText'>
                                                    <h1>{name}</h1>
                                                    {/* @TODO format number */}
                                                    <p>{volume} m3</p>
                                                </div>
                                            </button>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <MaterialDetails props={details}/>
                </div>
            )
        }

    }
}