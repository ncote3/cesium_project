import React, {useState} from 'react';
import {makeUseAxios} from "axios-hooks";
import axios from "axios";

const useAxios = makeUseAxios({
    axios: axios.create({baseURL: 'http://localhost:3100/'})
})

export default function MaterialDetails(props) {
    console.log(props);
    // @TODO Implement nameFormChangeHandler
    function nameFormChangeHandler(e)  {
        e.preventDefault()
        console.log('nameFormChangeHandler Clicked')
    }

    // @TODO Implement colorFormChangeHandler
    function colorFormChangeHandler(e)  {
        e.preventDefault()
        console.log('colorFormChangeHandler Clicked')
    }

    // @TODO Implement volumeFormChangeHandler
    function volumeFormChangeHandler(e)  {
        e.preventDefault()
        console.log('volumeFormChangeHandler Clicked')
    }

    // @TODO Implement costFormChangeHandler
    function costFormChangeHandler(e)  {
        e.preventDefault()
        console.log('costFormChangeHandler Clicked')
    }

    // @TODO Implement deliveryDateChangeHandler
    function deliveryDateChangeHandler(e)  {
        e.preventDefault()
        console.log('deliveryDateChangeHandler Clicked')
    }

    const { name, color, volume, cost, date } = props.props;
    return (
        <div className='MaterialsDetails'>
            <form>
                <label>
                    Name
                    <input
                        name='nameField'
                        type='text'
                        onChange={nameFormChangeHandler}
                        value={name}
                    />
                </label>
            </form>
            <form>
                <label>
                    Color
                    <input
                        name='colorField'
                        type='color'
                        onChange={colorFormChangeHandler}
                        value={color}

                    />
                </label>
            </form>
            <form>
                {/* @TODO modify the m3 to be a exponent*/}
                <label>
                    Volume (m3)
                    <input
                        name='volumeField'
                        type='number'
                        step='1.00'
                        min='0.00'
                        value={volume}
                        onChange={volumeFormChangeHandler}
                    />
                </label>
            </form>
            <form>
                {/* @TODO modify the m3 to be a exponent*/}
                <label>
                    Cost (USD per m3)
                    <input
                        name='costField'
                        type='number'
                        step='0.01'
                        min='0.00'
                        value={cost}
                        onChange={costFormChangeHandler}
                    />
                </label>
            </form>
            <form>
                <label>
                    Delivery Date
                    <input
                        name='deliveryDateField'
                        type='date'
                        value={date}
                        onChange={deliveryDateChangeHandler}
                    />
                </label>
            </form>
        </div>
    )
}