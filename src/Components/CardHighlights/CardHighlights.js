import styled from "styled-components";

export const Card = styled.div`
    min-width: 300px;
    height: 500px;
    margin-left: 5px;
    margin-bottom: 5px;
    transition: .5s all;
    position: relative;

    h2{
        display: flex;
        font-size: .9rem;
        margin: 10px 0px;
        font-family: sans-serif;
        letter-spacing: 1px;
    }
    p{
        display: flex;
        color: rgba(255,255,255, 0.2);
    }

    
    div{
        padding-left: 5px;
    }
    
`

export const ImgFavorite = styled.img`
    position: absolute;
    top: 15px;
    right: 40px;
    z-index: 9;
    cursor: pointer;
    &:hover{
        transform: scale(1.1);
    }
`

export const Imgs = styled.img`
    max-width: 100%;
    max-height: 80%;
    width: 100%;
    object-fit: cover;
    cursor: pointer;
    transition: 0.1s step-end;
    border: none;
    border-radius: 10px;
    padding: .2rem;


`