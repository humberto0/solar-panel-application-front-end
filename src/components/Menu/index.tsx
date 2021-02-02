import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/logoLaranja.png';

import { Container, Header, StyledMenu } from './styles';
import { useOnClickOutside } from '../../hooks/Menu';
import Hamburger from '../Hamburguer';

const Menu: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const node = useRef<HTMLDivElement>(null);
  const close = () => setOpen(false);

  useOnClickOutside(node, () => setOpen(false));
  return (
    <Container>
      <Header ref={node}>
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
        <StyledMenu open={open}>
          <a href="/" onClick={() => close()}>
            Home
          </a>
          <Link to="/simulator" onClick={() => close()}>
            Simule
          </Link>
          <Link to="/contacts" onClick={() => close()}>
            Contatos
          </Link>
          <Link to="/signUp" onClick={() => close()}>
            Proposta
          </Link>
          <Link to="/works" onClick={() => close()}>
            Trabalhos
          </Link>
        </StyledMenu>
        <Hamburger open={open} setOpen={setOpen} />
      </Header>
    </Container>
  );
};
export default Menu;
