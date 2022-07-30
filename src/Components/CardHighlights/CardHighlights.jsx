import React from 'react';
import { Imgs, Card } from './CardHighlights.js';

const imageURL = import.meta.env.VITE_IMG;

export default function CardHighlights({ movie }) {
    console.log(movie)
    return (
        <Card>
            <Imgs src={imageURL + movie.poster_path} alt={movie.title} />
            <h2>{movie.title}</h2>
        </Card>
    )
}

