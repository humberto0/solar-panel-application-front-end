import React from 'react';
import { Link } from 'react-router-dom';
import { useTransform } from 'framer-motion';
import { useWrapperScroll } from '../../model';
import logoImg from '../../assets/logoLaranja.png';

import { Container, Header, Footer } from './styles';

const UniqueOverlay: React.FC = () => {
  const { scrollYProgress } = useWrapperScroll();
  const opacity = useTransform(scrollYProgress, [0.9, 1], [0, 1]);

  return (
    <Container>
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
        <Link to="/works" className="title" type="submit">
          Serviço
        </Link>
      </Header>
      <Footer id="teste" style={{ opacity }}>
        <ul>
          <li>
            <a className="footer" href="mailto:h7engenharia100@gmail.com">
              {' '}
              H7engenharia100@gmail.com{' '}
            </a>
          </li>
          <li>
            <a className="footer" href="test">
              Celular :98991001013
            </a>
          </li>
        </ul>
      </Footer>
    </Container>
  );
};

export default UniqueOverlay;
