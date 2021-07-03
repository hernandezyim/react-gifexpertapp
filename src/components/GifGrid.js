import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const { loading, data: imgs } = useFetchGifs(category);

    return (
        <>
            { loading && <h1>Loading</h1>}

            <div className='cards'>
            {
                imgs.map(img => {
                    return (
                        <GifGridItem key={img.id} {...img} />
                    )
                })
            }
        </div>
        </>
    )
}
