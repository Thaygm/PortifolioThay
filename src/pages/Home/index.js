import React from 'react';
import InfosPessoais from '../../components/InfosPessoais';
import DadosProjetos from '../../components/DadosProjetos';

import { Container } from './styles';

export default function Home() {
  return (
    <Container>
      <aside>
        <InfosPessoais/>
      </aside>
      <main>
        <DadosProjetos/>
      </main>
    </Container>
  );
}

