import React from 'react';
import Group from '../../assets/group.png';
import { Container, ImageMain, Informations } from './Dashboard.js';
import Favorite from '../../assets/imagem1.svg';
import Like from '../../assets/imagem6.svg';


export default function Dashboard() {
    return (
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
    )
}
