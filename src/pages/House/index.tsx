import React from 'react';
import { Container, Background, Content, AnimationContainer } from './styles';
import Menu from '../../components/Menu';

const House: React.FC = () => {
  return (
    <>
      <Container>
        <Content>
          <Menu />
          <AnimationContainer>
            <form>
              <h1>Tenha energia solar na sua casa</h1>
              <ul>
                <li>Economize dinheiro em contas de eletricidade / energia</li>
                <li>
                  Tenha uma energia Limpa, seguro, de baixa manutenção e
                  acessível
                </li>
                <li>
                  Reduzir as emissões de carbono apoiando a energia renovável
                </li>
                <li>
                  Garantia de produção de até 25 anos com expectativa de vida
                  útil de 40 anos
                </li>
              </ul>
            </form>
          </AnimationContainer>
        </Content>
        <Background />
      </Container>
    </>
  );
};
export default House;
