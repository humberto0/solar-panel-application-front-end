import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Background, Content, AnimationContainer } from './styles';
import logoImg from '../../assets/logoLaranja.png';
import { Header } from '../../components/UniqueOverlay/styles';

const House: React.FC = () => {
  return (
    <>
      <Container>
        <Content>
          <Header>
            <a href="/">
              <img src={logoImg} alt="github_explorer" />
            </a>
            <a href="/" className="title" type="submit">
              Home
            </a>
            <Link to="/simulator" className="title" type="submit">
              Simule
            </Link>
            <Link to="/contacts" className="title" type="submit">
              Contatos
            </Link>
            <Link to="/signUp" className="title" type="submit">
              Proposta
            </Link>
            <Link to="/works" className="title" type="submit">
              Trabalhos
            </Link>
          </Header>
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
