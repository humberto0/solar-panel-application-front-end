import styled, { keyframes } from 'styled-components';
import sol from '../../assets/34.jpg';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
  flex: 1;
  background: url(${sol}) no-repeat center;
  background-size: cover;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center;
  align-items: center;
  background-color: rgba(0, 0, 3, 0.95);
  width: 800px;
  height: 100%;
`;
const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: left;
  animation: ${appearFromRight} 1s;
  margin-left: 40px;

  form {
    width: 100%;
    text-align: left;
  }

  h1 {
    color: #ff9000;
    margin-bottom: 24px;
  }
  h3 {
    width: 90%;
    font-weight: 400;
    color: #f4ede8;
    margin-bottom: 10px;
  }
  ul {
    li {
      color: #f4ede8;
      margin-bottom: 24px;
    }
  }
`;
export const Background = styled.div``;
