import React from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';
import { Container, Services, Title } from './styles';
import { Footer } from '../../components/UniqueOverlay/styles';
import Menu from '../../components/Menu';
import placa1 from '../../assets/21.jpg';
import placa2 from '../../assets/22.jpeg';
import placa3 from '../../assets/23.jpg';

const Service: React.FC = () => {
  return (
    <>
      <Menu />
      <Container>
        <Title>
          <h1>Trabalhos Recentes</h1>
        </Title>
        <Services>
          <a href="mailto:h7engenharia100@gmail.com">
            <img src={placa2} alt="Humberto" />
            <div>
              <strong> Projeto fotovotaico de 4,03 kWp com 12 placas </strong>
              <p>
                Nesse projeto atuamos na instação, compra de materiais e a
                elaboração do projeto
              </p>
            </div>
            <FiChevronRight size={20} />
          </a>
          <a href="mailto:h7engenharia100@gmail.com">
            <img className="img2" src={placa3} alt="Humberto" />
            <div>
              <strong>Projeto fotovotaico de 5,36 kWp com 16 placas</strong>
              <p>
                Nesse projeto atuamos na instação, compra de materiais e a
                elaboração do projeto
              </p>
            </div>
            <FiChevronRight size={20} />
          </a>
          <a href="mailto:h7engenharia100@gmail.com">
            <img src={placa1} alt="Humberto" />
            <div>
              <strong>Projeto fotovotaico de 5 kWp com 10 placas </strong>
              <p>
                Nesse sistema a empresa trabalhou somente na elaboração do
                projeto, fazendo o acompanhamento na concessionária de energia
              </p>
            </div>
            <FiChevronRight size={20} />
          </a>
        </Services>
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
export default Service;
