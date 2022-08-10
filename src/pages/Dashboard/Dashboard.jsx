import React from 'react';
import Group from '../../assets/group.png';
import Favorite from '../../assets/imagem1.svg';
import Like from '../../assets/imagem6.svg';
import { useEffect, useState } from 'react';
import { Container, ImageMain, Informations, Highlights, BoxCard, RigthArrow, Wrapper, CarouselStyled } from './Dashboard.js';
import CardHighlights from '../../Components/CardHighlights/CardHighlights.jsx';
import { SpinnerGap, CaretRight, CaretLeft } from 'phosphor-react';
import Carousel from 'react-elastic-carousel';

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

export default function Dashboard() {

    const [topMovies, setTopMovies] = useState([]);

    const getMovies = async (url) => {
        const res = await fetch(url)
        const data = await res.json()
        setTopMovies(data.results)

    }

    useEffect(() => {
        const topFilmsUrl = `${moviesURL}top_rated?${apiKey}`
        getMovies(topFilmsUrl);
    }, [])

    return (
        <Wrapper>
            <Container>
                <figure>
                    <ImageMain src={Group} alt="Imagem Inicio" />
                </figure>
                <Informations>
                    <img src={Favorite} alt="favorite" />
                    <p>Visto recentemente</p>
                    <h2>Capitão Fantástico</h2>
                    <p>
                        Nas florestas do estado de Washington, um pai cria seus seis filhos longe da civilização,
                        em uma rígida rotina de aventuras. Ele é forçado a deixar o isolamento e leva sua família
                        para encarar o mundo, desafiando sua ideia do que significa ser pai.
                    </p>
                    <div>
                        <p>4/5</p>
                        <img src={Like} alt='Like' />
                    </div>
                </Informations>
            </Container>
            <BoxCard>
                <h2>Destaques</h2>
                <Highlights>
                <Carousel {...CarouselStyled}>
                    {topMovies === 0 && <SpinnerGap size={32} color="#ffffff" />}
                    {topMovies && topMovies.map((movie) =>{
                        console.log(movie)
                        return(
                                <CardHighlights
                                    key={movie.id}
                                    movie={movie}
                                />
                        )
                    } )}
                </Carousel>
                    {/* <RigthArrow>
                        <CaretLeft size={37} color="#ffffff" weight="bold" />
                        <CaretRight size={37} color="#ffffff" weight="bold" />
                    </RigthArrow> */}
                </Highlights>
            </BoxCard>
        </Wrapper>
    )
}
