import React from 'react';
import Perfil from '../../assets/imagem4.svg';
import Arrow from '../../assets/imagem2.svg';

import { Container, Navigation, ContainerFilm, Categories, Dropdown } from './Header.js';
import { useState } from 'react';


export default function Header() {

    const [dropdown, setDropdown] = useState(false);

    return (
        <Container>
            <h1>TODOFLIX</h1>
            <Navigation>
                <ul>
                    <li>Início</li>
                    <Categories onMouseOver={() => { setDropdown(!dropdown) }}>
                        <li>Categorias</li>
                        <img src={Arrow} alt='Arrow' />
                    </Categories>
                    {dropdown && (
                        <Dropdown>
                            <li>Todos</li>
                            <li>Favoritos</li>
                            <li>Já vistos</li>
                            <li>Adicionados</li>
                        </Dropdown>
                    )}
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

