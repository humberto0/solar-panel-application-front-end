import styled from 'styled-components';
import sol from '../../assets/19.png';

export const Container = styled.div`
  padding: 0;
  height: 100vh;
  background: url(${sol}) no-repeat;
  background-size: cover;
`;
export const Test = styled.div`
  "position":"relative","height": '400px';
`;
export const Contacts = styled.div`
  max-width: 710px;
  margin-top: 20vh;
  top: 35%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-weight: 700;
    font-size: 40px;
    line-height: 48px;
    color: #ffffff;
    max-width: 1200px;

    &.about {
      text-align: center;
      margin-left: 100vh;
    }
  }

  a {
    margin-top: 30px;
    background-color: rgba(0, 0, 5, 0.8);
    border-radius: 10px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;
    transition: transform 0.2s;

    &:hover {
      transform: translateX(10px);
    }

    & + a {
      margin-top: 16px;
    }

    display: flex;
    align-items: center;

    img {
      width: 80px;
    }

    div {
      margin-left: 16px;

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
    a {
      margin-top: 20px;
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

  @media (max-width: 635px) {
    margin-top: 15vh;
    h1 {
      text-align: left;
      margin-top: 0;
      font-weight: 500;
      font-size: 25px;
      line-height: 30px;

      &.about {
        text-align: center;
        margin-left: 0;
      }
    }

    a {
      margin-top: 20px;
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
    margin-right: 0;
    a {
      width: 100%;

      img {
        display: none;
      }
    }
  }
`;
