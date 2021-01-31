import styled from 'styled-components';
import sol from '../../assets/45.png';

export const Container = styled.div`
  padding: 0;
  margin: 0;
  height: 100vh;
  background: url(${sol}) no-repeat;
  background-size: cover;
  display: flex;
  text-align: center;
`;

export const Title = styled.text`
  margin-top: 20vh;

  h1 {
    max-width: 710px;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    font-weight: 700;
    font-size: 40px;
    line-height: 48px;
    color: #ffffff;
    text-align: center;
  }

  @media (max-width: 1100px) {
    margin-top: 15vh;
    h1 {
      font-size: 30px;
    }
  }
  @media (max-width: 635px) {
    margin-top: 15vh;
    h1 {
      margin-top: 0;
      font-weight: 500;
      font-size: 20px;
      line-height: 30px;
    }
  }
`;

export const Services = styled.div`
  max-width: 100%;
  margin-top: 20vh;
  top: 35%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    background-color: rgba(0, 0, 5, 0.8);
    border-radius: 10px;
    width: 400px;
    height: 400px;
    padding: 24px;
    display: flex;
    flex-direction: column;
    text-decoration: none;
    transition: transform 0.2s;
    margin: 30px;

    &:hover {
      transform: translateX(10px);
    }
    align-items: center;

    img {
      width: 180px;
      height: 180px;
      border-radius: 50%;
    }
    div {
      margin-top: 10px;

      strong {
        font-size: 20px;
        color: #eaeaea;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }

    svg {
      margin-left: auto;
      color: #c9c9d4;
    }
  }

  @media (max-width: 1100px) {
    margin-top: 20vh;
    flex-direction: column;
    a {
      width: 100%;
      padding: 15px;
      flex-direction: row;
      height: auto;
      margin: 10px;

      &:hover {
        transform: translateX(5px);
      }

      & + a {
        margin-top: 8px;
      }
      img {
        width: 54px;
        height: 54px;
        border-radius: 50%;
      }

      div {
        margin-left: 10px;
        margin-top: 0;

        strong {
          font-size: 15px;
        }

        p {
          font-size: 15px;
          margin-top: 2px;
        }
      }
    }
  }

  @media (max-width: 709px) {
    margin-top: 25vh;
    a {
      margin-top: 5px;
      width: 100%;
      padding: 15px;

      &:hover {
        transform: translateX(5px);
      }

      & + a {
        margin-top: 8px;
      }

      div {
        margin-left: 10px;

        strong {
          font-size: 15px;
        }

        p {
          font-size: 15px;
          margin-top: 2px;
        }
      }
    }
  }
  @media (max-width: 472px) {
    margin-top: 28vh;
    margin-right: 0;
    a {
      width: 100%;

      img {
        display: none;
      }
    }
  }
`;
