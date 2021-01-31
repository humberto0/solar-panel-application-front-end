import React from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';
import { Container, Contacts } from './styles';
import { Footer, Header } from '../../components/UniqueOverlay/styles';
import logoImg from '../../assets/logoLaranja.png';

const Contact: React.FC = () => {
  return (
    <>
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
      <Container>
        <Contacts>
          <h1>Converse conosco</h1>
          <a href="mailto:h7engenharia100@gmail.com">
            <img
              src="https://logodownload.org/wp-content/uploads/2018/03/gmail-logo-4-1.png"
              alt="Humberto"
            />
            <div>
              <strong>h7engenharia 100@gmail. com</strong>
              <p>Nos envie um email, fazemos orçamento sem compromisso </p>
            </div>
            <FiChevronRight size={20} />
          </a>
          <a href="test">
            <img
              src="https://img.icons8.com/plasticine/2x/whatsapp.png"
              alt="Humberto"
            />
            <div>
              <strong> 98991001013 </strong>
              <p>
                Se tiver alguma duvida nos envie uma mensagem, atendemos durante
                o horario comercial
              </p>
            </div>
            <FiChevronRight size={20} />
          </a>
          <a href="https://www.instagram.com/h7engenharia100/">
            <img
              className="img2"
              src="https://images.vexels.com/media/users/3/137198/isolated/lists/07f0d7b69ef071571e4ada2f4d6a053a-icone-do-instagram-colorido.png"
              alt="Humberto"
            />
            <div>
              <strong>@h7engenharia100</strong>
              <p>
                No siga no instagram e esteja por dentro de nossos projetos e
                promoções
              </p>
            </div>
            <FiChevronRight size={20} />
          </a>
        </Contacts>
      </Container>
      <Footer id="teste">
        <ul>
          <li>
            <a className="footer" href="mailto:h7engenharia100@gmail.com">
              H7engenharia100@gmail.com
            </a>
          </li>
          <li>
            <a className="footer" href="test">
              Celular :98991001013
            </a>
          </li>
        </ul>
      </Footer>
    </>
  );
};
export default Contact;
