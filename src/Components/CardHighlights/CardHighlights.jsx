import React from 'react';
import { Imgs, Card, ImgFavorite } from './CardHighlights.js';
import Favorite from '../../assets/imagem1.svg';

const imageURL = import.meta.env.VITE_IMG;

export default function CardHighlights({ movie }) {
    return (
        <Card>
            <ImgFavorite src={Favorite} alt="favorite" />
            <Imgs src={imageURL + movie.poster_path} alt={movie.title} />
            <div>
                <h2>{movie.title}</h2>
                <p>Visualizações: {movie.popularity}</p>
            </div>
        </Card>
    )
}

