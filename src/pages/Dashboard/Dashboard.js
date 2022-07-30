import styled from "styled-components";

export const Container = styled.section`

    max-width: 1900px;
    margin: 30px auto;
    padding: 2rem;
    display: flex;

`

export const ImageMain = styled.img`
    width: 60%;

`

export const Informations = styled.div`

        font-family: Arial, Helvetica, sans-serif;
        width: 600px;
        position: relative;
        right: 10rem;

        display: flex;
        flex-direction: column;
        justify-content: space-around;

        img{
            width: 30px;
            height: 30px;
            cursor: pointer;
            &:hover{
                transform: scale(1.1);
            }
        }

        h2{
            font-size: 2.5rem;
        }

        div{
            display: flex;
            align-items: center;
            p{
                margin-right: 10px;
            }
            img{
                width: 20px;
            }
        }

`
export const BoxCard = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1900px;
    margin: 0 auto;
    width: 100%;
    height: 100vh;
    padding-left: 1.2rem;

    h2{
        font-size: 2rem;
        font-family: Arial, Helvetica, sans-serif;
    }
`

export const Highlights = styled.section`
    margin-top: 2rem;
    padding-right: 10px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    height: 100vh;
`
