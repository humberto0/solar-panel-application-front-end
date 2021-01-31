import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 10px;
`;

export const Heading = styled.div`
  width: 100%;
  text-align: left;

  h1 {
    margin-top: 32vh;
    font-weight: bold;
    font-size: 40px;
    line-height: 48px;
    color: #ff9000;
    max-width: 1200px;
  }

  h2 {
    margin-top: 10px;
    font-weight: 400;
    font-size: 25px;
    line-height: 20px;
    color: #f4ede8;
  }

  > h3 {
    max-width: 900px;
    margin-top: 10px;
    font-weight: 400;
    font-size: 25px;
    line-height: 30px;
    color: #f4ede8;
  }

  @media (max-width: 600px) {
    width: 95%;
    margin-top: 16.5vh;
    text-align: center;

    h1 {
      margin-top: 5vh;
      margin-right: 5px;
      font-weight: 400;
      font-size: 25px;
      line-height: 30px;
      max-width: 1200px;
    }

    h2 {
      padding-top: 5px;
      font-weight: 200;
      font-size: 18px;
      line-height: 20px;
    }

    > h3 {
      margin-top: 5px;
      font-weight: 200;
      font-size: 18px;
      line-height: 20px;
    }
  }
  @media (max-width: 250px) {
    width: 90%;
    margin-top: 14.5vh;
    text-align: center;

    h1 {
      margin-top: 2vh;
      padding: 1px;
      font-weight: 400;
      font-size: 20px;
      line-height: 25px;
    }

    h2 {
      margin-top: 4px;
      font-weight: 200;
      font-size: 15px;
      line-height: 15px;
    }

    h3 {
      margin-top: 4px;
      font-weight: 200;
      font-size: 15px;
      line-height: 15px;
    }
  }
`;

export const Form = styled.form`
  width: 100%;
  text-align: left;

  h1 {
    margin-top: 24vh;
    font-weight: bold;
    font-size: 40px;
    line-height: 48px;
    color: #ff9000;
    max-width: 1200px;
    &.about {
      text-align: center;
      margin-left: 100vh;
    }
  }

  h2 {
    max-width: 900px;
    margin-top: 10px;
    font-weight: 400;
    font-size: 25px;
    line-height: 30px;
    color: #f4ede8;
    &.about {
      margin-left: 100vh;
    }
  }

  h3 {
    max-width: 600px;
    margin-top: 25px;
    font-weight: 400;
    font-size: 25px;
    line-height: 30px;
    color: #f4ede8;
    &.about {
      margin-left: 100vh;
    }
  }
  @media (max-width: 980px) {
    h1 {
      &.about {
        text-align: left;
        margin-left: 25vh;
        width: 95%;
      }
    }
    h2 {
      &.about {
        margin-left: 0;
      }
    }
    h3 {
      max-width: 500px;
      &.about {
        margin-left: 0;
      }
    }
  }
  @media (max-width: 600px) {
    width: 95%;
    text-align: center;

    > h1 {
      margin-top: 10vh;
      font-weight: 500;
      font-size: 30px;
      line-height: 38px;
      &.about {
        text-align: center;
        margin-left: 0;
      }
    }

    > h2 {
      margin-top: 5px;
      font-weight: 200;
      font-size: 18px;
      line-height: 20px;
      &.about {
        margin-left: 0;
      }
    }

    > h3 {
      max-width: 500px;
      margin-top: 20px;
      font-weight: 400;
      font-size: 18px;
      line-height: 20px;
      &.about {
        margin-left: 0;
      }
    }
  }
  @media (max-width: 275px) {
    width: 90%;
    text-align: center;
    h1 {
      margin-top: 8vh;
      font-weight: 500;
      font-size: 25px;
      line-height: 30px;
      &.about {
        text-align: center;
        margin-left: 0;
      }
    }

    h2 {
      margin-top: 4px;
      font-weight: 200;
      font-size: 15px;
      line-height: 15px;
      &.about {
        margin-left: 0;
      }
    }

    h3 {
      max-width: 600px;
      margin-top: 15px;
      font-weight: 400;
      font-size: 15px;
      line-height: 15px;
      &.about {
        margin-left: 0;
      }
    }
  }
`;

export const Buttons = styled.div`
  position: relative;
  top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin-bottom: 90px;

  a {
    text-decoration: none;
    background: transparent;
    color: #f4ede8;
    opacity: 0.9;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.4px;
    text-transform: uppercase;
    padding: 13px 40px;
    border-radius: 10px;
    border: 2px solid;
    outline: 0;
    cursor: pointer;

    &:hover {
      color: ${shade(0.1, '#ff9000')};
    }

    &.white {
      background: transparent;
      color: #f4ede8;
      opacity: 0.9;
      font-weight: 700;

      &:hover {
        opacity: 0.4;
      }
    }
  }

  > button {
    background: #1a1720;
    color: #f4ede8;
    opacity: 0.8;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.4px;
    text-transform: uppercase;
    padding: 13px 40px;
    border-radius: 20px;
    border: none;
    outline: 0;
    cursor: pointer;

    &.white {
      background: #f4ede8;
      color: #1a1720;
      opacity: 0.65;
    }

    & + button {
      margin: 10px 0 0;
    }

    &:hover {
      color: ${shade(0.2, '#f4ede8')};
      opacity: 0.5;
    }
  }

  @media (min-width: 600px) {
    flex-direction: row;
    font-weight: 500;
    font-size: 8px;
    margin-bottom: 50px;
    > button + button {
      margin: 0 0 0 10px;
    }
  }
`;
export const Contacts = styled.div`
  max-width: 710px;

  h1 {
    margin-top: 17vh;
    font-weight: bold;
    font-size: 40px;
    line-height: 48px;
    color: #f4ede8;
    max-width: 1200px;

    &.about {
      text-align: center;
      margin-left: 100vh;
    }
  }

  a {
    margin-top: 20px;
    background-color: rgba(0, 0, 4, 0.8);
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

  @media (max-width: 635px) {
    margin-top: 0;
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
