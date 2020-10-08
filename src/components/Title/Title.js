import React from 'react';

export default function Title(props) {
    const { title } = props
    return (
        <div className='Title'>
            <h1>{title}</h1>
        </div>
    )
}