import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Italiana&display=swap');

    :root{
        --main-font: 'Perpetua';
        --header-font: 'Italiana' , serif;

        --primary-background-color:#FFFAF5 ;
        --secondary-background-color:#D2C3AD ;
    }

    * {
        box-sizing: border-box;
    }

    body{
        position:relative;
        top:0;
        margin:0;
        padding:0;
        background-color :var(--primary-background-color);

        font-family: var(--main-font);
        font-size: 16px;

        overflow-x: hidden;

        &:before {
            background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/9632/paper-pattern.png");
            content: "";
            height: 300%;
            left: -50%;
            opacity: 0.2;
            position: fixed;
            z-index:-1;
            top: -100%;
            width: 300%;
         }
    }

    p{
        padding:0;
        margin:0;
    }

    .tl-edges{
        overflow:initial;
    }

`