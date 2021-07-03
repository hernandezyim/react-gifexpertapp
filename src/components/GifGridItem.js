import React from 'react'

export const GifGridItem = ({title, url}) => {
    return (
        <div className='card animate__animated animate__fadeInTopLeft'>
            <h1>{title}</h1>
            <img src={url} alt={title} />
        </div>
    )
}
