import React from 'react';
import {
    FaDev, FaLinkedin, FaGithub, FaMapMarkerAlt,
    FaRegEnvelope
} from 'react-icons/fa';

import {
    Container, Informacoes, DadosPerfil, Funcao, RedeSociais,
    Detalhes, DadosEndereco
} from './styles';

export default function InfoPessoais() {
    return (
        <Container>
            <Informacoes>
                <DadosPerfil>
                    <img src="https://avatars.githubusercontent.com/u/117474632?s=400&u=99320027a1c74afc667c7cc0e5f5385eefd7e1ae&v=4" alt="Minha Foto" />
                    <h1>THAÍSA MENDES</h1>
                </DadosPerfil>
                <Funcao>
                    <FaDev size={20} />
                    <span>Front-End Developer</span>
                </Funcao >
                <RedeSociais>
                    <div>
                        <a href='https://www.linkedin.com/in/thaisagmendes/' target={'_blank'}><FaLinkedin size={25} /></a>
                        <a href='https://github.com/Thaygm' target={'_blank'}><FaGithub size={25} /></a>
                    </div>
                </RedeSociais>
                <DadosEndereco>
                    <Detalhes>
                        <FaMapMarkerAlt size={20} />
                        <span>Brasília - Distrito Federal - BR</span>
                    </Detalhes>
                    <Detalhes>
                        <FaRegEnvelope size={20} />
                        <span>thay.gm@live.com</span>
                    </Detalhes>
                </DadosEndereco>
            </Informacoes>
        </Container>
    );
}
