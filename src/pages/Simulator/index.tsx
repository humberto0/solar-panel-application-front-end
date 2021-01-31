import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';
import { FiLogIn, FiColumns, FiDollarSign } from 'react-icons/fi';
import { Container, Content, Background, AnimationContainer } from './styles';
import { Header } from '../../components/UniqueOverlay/styles';
import logoImg from '../../assets/logoLaranja.png';
import Button from '../../components/Button';
import Input from '../../components/Input';
import priceList from '../../utils/priceList';

interface SimulatorFormData {
  conta: number;
  placas?: string;
  price?: string;
}

const Simulator: React.FC = () => {
  const [decimalText, setDecimalText] = useState('');
  const [price, setPrice] = useState('');

  // eslint-disable-next-line no-shadow,@typescript-eslint/explicit-function-return-type
  function handleSubmit(data: SimulatorFormData) {
    if (data.conta !== 0) {
      const valor: number = data.conta;
      const result = Math.ceil(
        (((Number(valor) / 30 / 5) * 1.15) / (340 / 1000)) * 1.045,
      );
      setDecimalText(`${result} Placas`);
      // eslint-disable-next-line default-case
      switch (result) {
        case 2:
          setPrice(priceList[0]);
          break;
        case 3:
          setPrice(priceList[1]);
          break;
        case 4:
          setPrice(priceList[2]);
          break;
        case 5:
          setPrice(priceList[3]);
          break;
        case 6:
          setPrice(priceList[4]);
          break;
        case 7:
        case 8:
          setPrice(priceList[5]);
          break;
        case 9:
        case 10:
          setPrice(priceList[6]);
          break;
        case 11:
        case 12:
          setPrice(priceList[7]);
          break;
        case 13:
        case 14:
          setPrice(priceList[8]);
          break;
        case 15:
        case 16:
          setPrice(priceList[9]);
          break;
        case 17:
        case 18:
          setPrice(priceList[10]);
          break;
        case 19:
        case 20:
          setPrice(priceList[11]);
          break;
        case 21:
          setPrice(priceList[12]);
          break;
        case 22:
          setPrice(priceList[13]);
          break;
        case 23:
        case 24:
          setPrice(priceList[14]);
          break;
        case 25:
        case 26:
          setPrice(priceList[15]);
          break;
        case 27:
        case 28:
          setPrice(priceList[16]);
          break;
        case 29:
        case 30:
          setPrice(priceList[17]);
          break;
        case 31:
        case 32:
        case 33:
          setPrice(priceList[18]);
          break;
        case 34:
        case 35:
        case 36:
          setPrice(priceList[19]);
          break;
        case 37:
        case 38:
        case 39:
          setPrice(priceList[20]);
          break;
        case 41:
        case 42:
        case 43:
          setPrice(priceList[21]);
          break;
        case 44:
        case 45:
        case 46:
          setPrice(priceList[22]);
          break;
        case 47:
        case 48:
        case 49:
        case 50:
          setPrice(priceList[22]);
          break;
      }
      if (result > 50) setPrice(priceList[26]);
    }
  }

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
            <Form onSubmit={handleSubmit}>
              <h1>Simule seus Custos</h1>

              <Input
                name="conta"
                icon={FiDollarSign}
                placeholder="Valor da Conta"
                autoComplete="off"
                type="Number"
                max={200000}
              />

              <Input
                name="placas"
                icon={FiColumns}
                type="text"
                placeholder=" Quantidade de Placas "
                value={decimalText}
                disabled
              />
              <Input
                name="price"
                icon={FiDollarSign}
                type="text"
                className="Result"
                placeholder="Preço dos Materiais"
                value={price}
                disabled
              />
              <Button type="submit">Calcular</Button>
            </Form>
            <Link to="/signUp" className="title" type="submit">
              <FiLogIn />
              Se cadastrar para enviarmos uma proposta
            </Link>
          </AnimationContainer>
        </Content>
        <Background />
      </Container>
    </>
  );
};
export default Simulator;
