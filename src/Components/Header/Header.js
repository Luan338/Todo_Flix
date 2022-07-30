import styled from 'styled-components';

export const Container = styled.header`
    background-color: black;
    max-width: 1900px;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    align-items: center;

    h1{
        color: #E71B27;
        font-size: 2rem;
        padding: 1rem;
        font-family: 'Bebas Neue', cursive;
        cursor: pointer;
    }
`

export const Navigation = styled.nav`
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 3rem;

    @media(max-width: 945px){
        display: none;
    }
    
    ul{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 200px;
        font-family: Arial, Helvetica, sans-serif;
    }

    li{
        cursor: pointer;
        &:hover{
            opacity: .6;
        }
    }

    button{
        background-color: #E71B27;
        color: rgba(255,255,255, 1);
        width: 120px;
        padding: .7rem;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-family: Arial, Helvetica, sans-serif;

        &:hover{
            opacity: .6;
        }

        @media(max-width: 1230px){
            width: 100px;
            font-size: .7rem;
            margin-right: 10px;
        }
    }

`

export const ContainerFilm = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    input{
        background-color: #2C2C2C;
        outline: none;
        border: none;
        padding: .7rem;
        width: 60%;
        border-radius: 5px;
        color: white;

        @media(max-width: 1170px){
            width: 50%;
        }

        @media(max-width: 940px){
            margin-right: 10px;
        }
    }

    div{
        cursor: pointer;
    }

`

export const Categories = styled.div`
    width: 240px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 30px;
    cursor: pointer;
    transition: .6s all;
`

export const Dropdown = styled.ol`
    padding: 1rem;
    background-color: black;
    position: absolute;
    top: 60px;
    width: 200px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    li{
        padding: 0.4rem;
        border-radius: 2px;
        &:hover{
            opacity: 1;
            background-color: #2C2C2C;
        }
    }
`