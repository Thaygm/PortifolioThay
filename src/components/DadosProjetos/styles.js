import styled from 'styled-components';
import { motion } from "framer-motion"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background: #EAEAEA;
    max-width: 100vw;
    min-height: 90vh;
    border-radius: 15px;

    nav {
        display: flex;
        align-items: center;
    }
`;

export const Menu = styled.div`
    display: flex;
    justify-content: space-between;
    min-width: 60vw;
    margin: 2% 0 0 3%;

    span {
        color: #3EC1D3;
        font-weight: bold;
        font-size: 1.2rem;
        color: #08D9D6;
        transition: filter 0.5s;

        &:hover {
            filter: brightness(0.5)
        }
    }
`;

export const Cabecalho = styled.div`
    display:flex;
    flex-direction: column;

    div {
        display: flex;
        align-items:center;
        justify-items: center;
        background: linear-gradient(90deg, rgba(8,217,214,1) 0%, rgba(234,234,234,1) 35%, rgba(255,46,99,1) 100%);
        padding-top: 8%;
        width: 100%;
        margin-top: 3%;
        border-radius: 8%;
    }
`;

export const OpcoesMenu = styled.div`
    justify-content: space-between;

    & span {
        cursor: pointer;
        margin-right: 12px;
    }
`;

export const Dados = styled.div`
    display:flex;
    flex-grow: 1;
    flex-direction: column;
    align-items:center;
    justify-content: center;

    h1 {
        margin-top: 2%;
        text-align: center;
        background:rgba(8, 217, 214,1);
        color: #EAEAEA;
        width: 100%;
    }
`;

export const InfoDados = styled(motion.div)`
    width: 95%;
    max-height: 45vh;
    overflow-y: auto;

    span {
        color: #000;
    }
`;

export const Skills = styled.div`
    display:flex;
    flex-wrap: wrap;
    flex-grow: 1;
    background: rgba(37, 42, 52,1);
    padding: 10px;
    border-radius: 0 0 15px 14px;
    max-height: 48.5vh;
    overflow-y: auto;
    overflow-x: hidden;
    width: 100%;
`;

export const ItemSkill = styled(motion.div)`
    display: flex;
    align-items: center;
    flex: 1 1 40%;
    border-radius: 5px;
    background: rgba(8, 217, 214,1);
    margin:0 2% 2% 0;
    height: 15vh;

    div {
        width: 100%;

    h3 {
        margin-bottom: 2%;
        color: #252A34;
        font-size: 1em;
    }

    & span {
        font-size: 0.8em;
        line-height: 0;
    }
}

svg {
    margin: 5%;
}

@media(max-width: 714px) {
    flex: 1 1 50%;
}
`;

export const Itens = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-grow:1;
    background-color: #eaeaea;
    max-height: 80vh;
    overflow-y: auto;
    border-radius: 15px;
`;

export const Card = styled(motion.div)`
    display: flex;
    flex: 1 1 20%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #eaeaea;
    border-radius: 15px 15px 15px 0;
    margin: 15px 32px;
    width: 25%;
    height: 15%;
    box-shadow: 10px 5px 5px rgba(0,0,0,0.4);
    transition: all 0.5s;

    &:hover {
        transform: scale(1.1);
    }

    img {
        height: 100%;
        width: 100%;
        margin-bottom: 5%;
    }

    .links {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 30%;
        background-color: rgba(255, 46, 99,1);
        font-size: 1.4em;
        color: #eaeaea;
        border-radius: 0 0 15px 15px;

    svg {
        margin-right: 5%;
    }
}

.a {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 30%;
    font-size: 1.4em;

    svg {
        margin-right: 1%;
    }
}

h3 {
    border-radius: 15px 15px 0 0;
    width: 100%;
    text-align: center;
    background-color: rgba(37,42,52,1);
    color: #eaeaea;
}
`;

export const ProgressBar = styled.div`
    width: 90% !important;
    background-color: #eaeaea;
    border-radius: 15px;
    margin: 15px;
`;

export const Progress = styled.div`
    height: 100%;
    width: ${(props) => props.percentual ? `${props.percentual}` : '0%'} !important;
    background-color: #FF2E63;
    border-radius: 15px;
    text-align: right;

    span {
        padding: 5%;
        color: #eaeaea;
        font-weight: bold;
    }
`;
