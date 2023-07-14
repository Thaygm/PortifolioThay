import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  * {
    margin:0;
    padding:0;
    outline:0;
    box-sizing: border-box;
    font-family: 'Josefin Sans', sans-serif;

        &::-webkit-scrollbar-thumb {
            background-color: rgba(255, 22, 93, 1);
            border-radius: 20px;
            border: 3px solid #EAEAEA;
        }

        &::-webkit-scrollbar-track {
            background: #EAEAEA;
            border-radius: 5px;
        } 

        &::-webkit-scrollbar {
            width: 12px;
        }
    }

    *:focus{
        outline: 0;
    }

    html,body,#root{
        height: 100%;
    }

    body{
        background: linear-gradient(180deg, rgba(255, 46, 99, 1) 0%, rgba(8, 217, 214, 1) 100%);
        -webkit-font-smoothing: antialiase;
    }

    body, input{
        font-family: 'Josefin Sans', sans-serif;
    }

    label, span{
        color: #EAEAEA;
        line-height: 28px;
    }

    a{
        text-decoration:none;
    }

    ul{
        list-style: none;
    }

    `;