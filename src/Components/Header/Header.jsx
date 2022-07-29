import React from 'react';
import Perfil from '../../assets/imagem4.svg';
import Arrow from '../../assets/imagem2.svg';

import { Container, Navigation, ContainerFilm, Categories } from './Header.js';


export default function Header() {
    return (
        <Container>
            <h1>TODOFLIX</h1>
            <Navigation>
                <ul>
                    <li>Início</li>
                    <Categories>
                        <li>Categorias</li>
                        <img src={Arrow} alt='Arrow' />
                    </Categories>
                </ul>
                <ContainerFilm>
                    <button>Adicionar filme</button>
                    <input type="text" placeholder='Pesquisar' />
                    <div>
                        <img src={Perfil} alt='Imagem Perfil' />
                        <img src={Arrow} alt='Imagem Arrow' />
                    </div>
                </ContainerFilm>
            </Navigation>
        </Container>
    )
}

