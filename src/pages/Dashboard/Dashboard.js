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
