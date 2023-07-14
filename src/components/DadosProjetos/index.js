import React, { useState } from 'react';
import { FaGithub, FaLink } from 'react-icons/fa';
import { SkillsItem } from '../../projects/skills';
import { Projetos } from '../../projects/projects';

import {
    Container, Menu, Cabecalho, OpcoesMenu, Dados, InfoDados,
    Skills, ItemSkill, Card, Itens, ProgressBar, Progress
} from './styles';


export default function () {
    const ItensSkill = SkillsItem;
    const [showDados, setShowDados] = useState(true);
    const variants = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    }

    function handleClickMenu(isTrue) {
        if (isTrue) {
            setShowDados(true);
        } else {
            setShowDados(false);
        }
    }

    return (
        <Container>
            <nav>
                <Menu>
                    <Cabecalho>
                        <span>Menu</span>
                        <div></div>
                    </Cabecalho>
                    <OpcoesMenu>
                        <span onClick={() => handleClickMenu(false)}>Projetos</span>
                        <span onClick={() => handleClickMenu(true)}>Sobre</span>
                    </OpcoesMenu>
                </Menu>
            </nav>
            <Dados>
                {showDados ? (
                    <>
                        <InfoDados initial="hidden" animate="visible" variants={variants}>
                            <span>
                                Meu nome é Thaísa Mendes, tenho 29 anos e estudo há um ano Engenharia de Front-end.
                                Tenho experiencia com HTML5, CSS3, JavaScript, Bootstrap, ReactJS, jQuery, SASS, LESS, GULP,
                                Grunt, Ajax, TypeScript, NPM, ES6+, Vuejs, Cypress, Metodologias Ageis.
                                Atualmente dedico meu tempo aos estudos e criação de projetos para o meu portifólio.<br />
                                Curiosidade: Sou formada e Arquitetura e urbanismo e atualmente uso a criatividade e
                                metodologia de criação de projetos baseado em projetos arquitetônicos, visando a melhor
                                experiencia para os usuarios.<br />

                            </span>
                        </InfoDados>
                        <h1>Hard Skills</h1>
                        <Skills>
                            {ItensSkill.map((Item) =>
                                <ItemSkill animate={{ x: ['-100px', '100px', '0px'] }}
                                    transition={{ ease: "easeOut", duration: 1 }}>
                                    {Item.icon}
                                    <div>
                                        <h3>{Item.titulo}</h3>
                                        <ProgressBar>
                                            <Progress percentual={Item.Percentual}>
                                                <span>{Item.Percentual}</span>
                                            </Progress>
                                        </ProgressBar>
                                    </div>
                                </ItemSkill>
                            )}
                        </Skills>
                    </>
                ) : (
                    <>
                        <Itens>
                            {Projetos.map((projetos) =>
                                <Card initial="hidden" animate="visible" variants={variants}>
                                    <h3>{projetos.nome}</h3>
                                    <img src={projetos.img} alt="" />
                                    <div className='links'>
                                        <a href={projetos.github} target={'_blank'}>
                                            <FaGithub size={15} />
                                            Git Hub
                                        </a>
                                        <a href={projetos.vercel} target={'_blank'}>
                                            Vercel
                                        </a>
                                    </div>
                                </Card>
                            )}
                        </Itens>
                    </>
                )}
            </Dados>
        </Container >
    );
}