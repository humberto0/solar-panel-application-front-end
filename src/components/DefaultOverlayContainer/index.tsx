import React from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';
import { Container, Heading, Form, Buttons, Contacts } from './styles';

interface Props {
  label: string;
  description: string;
  title: string;
}

const DefaultOverlayContent: React.FC<Props> = ({
  label,
  description,
  title,
}) => {
  // eslint-disable-next-line no-empty,default-case
  switch (label) {
    case 'Pag1':
      // eslint-disable-next-line no-param-reassign
      label = 'H7/Engenharia - Energia limpa e barata ao seu alcance';
      // eslint-disable-next-line no-param-reassign
      description =
        'Com a H7/Engenharia você tem os melhores preços para sua residéncia e empresa.';
      break;
    case 'Pag2':
      // eslint-disable-next-line no-param-reassign
      label = 'Economize na conta de Luz da sua casa';
      // eslint-disable-next-line no-param-reassign
      title =
        'Com a H7/Engenharia você pode economizar até 94% da conta da sua conta luz através da energia capturada ' +
        'por painéis fotovoltaicos.';
      break;
    case 'Pag3':
      // eslint-disable-next-line no-param-reassign
      label = 'Sua fazenda. Seu futuro. Nosso foco em ajudar';
      break;
    case ' ':
      break;
    case 'Pag5':
      // eslint-disable-next-line no-param-reassign
      label = '';
      break;
    default:
      // eslint-disable-next-line no-param-reassign
      description = '';
  }
  return (
    <Container>
      <Heading>
        {label === '' && (
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
            <a href="/">
              <img
                src="https://img.icons8.com/plasticine/2x/whatsapp.png"
                alt="Humberto"
              />
              <div>
                <strong> 98991001013 </strong>
                <p>
                  Se tiver alguma duvida nos envie uma mensagem, atendemos
                  durante o horario comercial
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
        )}
        {label === ' ' && (
          <>
            <Form>
              <h1>Sua empresa sustentável</h1>
              <h3>
                Os painéis solares para fábricas podem realmente gerar retorno?
                A resposta é sim - veja o que sua empresa pode esperar ao
                instalar painéis solares em fábricas e aproveitar a solar limpa
                em suas instalações.
              </h3>
            </Form>
            <Buttons>
              <Link className="white" to="/factory">
                Saiba Mais
              </Link>
            </Buttons>
          </>
        )}
        <h1>{label}</h1>
        <h2>{description}</h2>
        <h3>{title}</h3>
        {label === 'H7/Engenharia - Energia limpa e barata ao seu alcance' && (
          <Buttons>
            <Link to="/simulator">Simule Agora</Link>
          </Buttons>
        )}
        {label === 'Economize na conta de Luz da sua casa' && (
          <Buttons>
            <Link className="white" to="/house">
              Saiba Mais
            </Link>
          </Buttons>
        )}
        {label === 'Sua fazenda. Seu futuro. Nosso foco em ajudar' && (
          <>
            <Form>
              <h2>
                A H7/Engenharia foi fundada para todo tipo de mercado, e uma das
                metas é fornecer uma solução de energia alternativa para
                agricultores, pecuaristas e proprietários de agronegócios, desde
                forma, ajudar a forneçer energia limpa e renovável.
              </h2>
            </Form>
            <Buttons>
              <Link className="white" to="/farm">
                Saiba Mais
              </Link>
            </Buttons>
          </>
        )}
      </Heading>
    </Container>
  );
};

export default DefaultOverlayContent;
