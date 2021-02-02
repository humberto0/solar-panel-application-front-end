import React from 'react';
import { Container, Background, Content, AnimationContainer } from './styles';
import Menu from '../../components/Menu';

const Farm: React.FC = () => {
  return (
    <>
      <Container>
        <Content>
          <Menu />
          <AnimationContainer>
            <form>
              <h1>Colheita Solar para sua fazenda</h1>
              <ul>
                <li>Economize dinheiro em contas de eletricidade / energia</li>
                <li>Limpo, seguro, de baixa manutenção e acessível</li>
                <li>
                  Reduzir as emissões de carbono apoiando a energia renovável
                </li>
                <li>
                  Os avanços na tecnologia solar aumentaram a eficiência,
                  confiabilidade e durabilidade
                </li>
                <li>
                  Garantia de produção de até 25 anos com expectativa de vida
                  útil de 40 anos
                </li>
                <li>Mais um passo em direção à independência energética</li>
              </ul>
            </form>
          </AnimationContainer>
        </Content>
        <Background />
      </Container>
    </>
  );
};
export default Farm;
