import styled from "styled-components";

export const Card = styled.div`
    width: 20%;

    h2{
        font-size: .9rem;
        margin: 10px 0px;
        font-family: sans-serif;
        letter-spacing: 1px;
    }
    p{
        color: rgba(255,255,255, 0.3);
    }
`

export const Imgs = styled.img`
    max-width: 100%;
    max-height: 80%;
    object-fit: cover;
    cursor: pointer;
    transition: 0.1s step-end;
    border: none;
    border-radius: 4px;
    padding: .2rem;
    
    &:hover, &:focus{
    }
`