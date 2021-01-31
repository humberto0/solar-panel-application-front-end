import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Background, Content, AnimationContainer } from './styles';
import logoImg from '../../assets/logoLaranja.png';
import { Header } from '../../components/UniqueOverlay/styles';

const Factory: React.FC = () => {
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
              <h1>
                Os painéis solares para fábricas podem realmente gerar retorno?
              </h1>
              <h3>
                A energia solar é agora a fonte de energia mais barata em todo o
                mundo. Utilizar a energia solar para até mesmo uma parte do
                consumo de energia operacional da sua empresa reduz diretamente
                a energia de combustível fóssil e oferece a diferença de custo
                como economia direta. O consumo elétrico é responsável por
                aproximadamente 20 por cento do uso de energia na fabricação .
              </h3>
              <h3>
                Dependendo do espaço disponível, orçamento e consumo anual de
                energia, sua instalação pode gerar toda a energia necessária
                para as operações por meio da instalação de painéis solares nas
                fábricas. A capacidade de gerar energia para necessidades
                operacionais também isola uma empresa dos aumentos nos preços
                dos serviços públicos, o que representa um grande risco para o
                aumento dos orçamentos.
              </h3>
            </form>
          </AnimationContainer>
        </Content>
        <Background />
      </Container>
    </>
  );
};
export default Factory;
