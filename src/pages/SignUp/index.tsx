import React, { useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { FiArrowLeft, FiMail, FiUser, FiMapPin } from 'react-icons/fi';
import getValidationErrors from '../../utils/getValidationErrors';
import { Container, Content, Background, AnimationContainer } from './styles';
import { Header } from '../../components/UniqueOverlay/styles';
import logoImg from '../../assets/logoLaranja.png';
import Button from '../../components/Button';
import Input from '../../components/Input';
import api from '../../services/api';
import { useToast } from '../../hooks/Toast';

interface SignUpFormData {
  nome: string;
  email: string;
  address: string;
}

const SingUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const handleSubmit = useCallback(
    async (data: SignUpFormData) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          name: Yup.string()
            .required('Nome obrigatório')
            .max(100, 'No maximo 100 caracteres')
            .min(10, 'No minimo 10 caracteres'),
          email: Yup.string()
            .required('Email obrigatório')
            .email('Digite um email valido'),
          address: Yup.string()
            .required('Endereço obrigatorio')
            .max(100, 'No maximo 100 caracteres')
            .min(10, 'No minimo 10 caracteres'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/appointments', data);
        addToast({
          type: 'success',
          title: 'Cadastro realizado!',
          description: 'Logo Logo enviaremos uma proposta para você !!',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Erro no cadastro',
          description: 'Ocorreu um erro ao fazer cadastro, tente novamente.',
        });
      }
    },
    [addToast],
  );
  return (
    <>
      <Container>
        <Background />
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
            <Form ref={formRef} onSubmit={handleSubmit}>
              <h1>Cadastre-se</h1>
              <Input name="name" icon={FiUser} placeholder="Nome" />
              <Input name="email" icon={FiMail} placeholder="E-mail" />
              <Input name="address" icon={FiMapPin} placeholder="Endereço" />
              <Button type="submit">Cadastrar</Button>
            </Form>
            <Link to="/simulator">
              <FiArrowLeft />
              Voltar
            </Link>
          </AnimationContainer>
        </Content>
      </Container>
    </>
  );
};
export default SingUp;
