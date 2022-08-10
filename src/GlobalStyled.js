import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background-color: black;
        color: white;
    }

    ul, ol{
        list-style: none;
    }

    a{
        text-decoration: none;
    }

    .rec.rec-arrow {
    background-color: transparent;
    border: none;
    box-shadow: none;
}

.rec.rec-arrow:hover {
    border-radius: 50%;
    background-color: red;
}

`;

export default GlobalStyled;
