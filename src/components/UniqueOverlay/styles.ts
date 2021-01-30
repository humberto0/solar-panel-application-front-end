import styled from 'styled-components';
import { motion } from 'framer-motion';
import { shade } from 'polished';

export const Container = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  padding: 0 20px;
  min-height: 52px;
  justify-content: space-between;
  margin-top: 15px;

  img {
    height: 50px;
    cursor: pointer;
    margin-right: 100px;
    transition: opacity 0.3s;

    &:hover {
      opacity: 0.5;
    }
  }

  a {
    &.title {
      margin-left: 100px;
      flex: 1;
      position: relative;
      bottom: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 20px;
      color: #f4ede8;
      font-weight: 700;
      text-align: center;
      font-size: 16.5px;
      transition: background-color 0.3s;
      cursor: pointer;
      text-decoration: none;

      & + text {
        margin-right: 5px;
        margin-left: 5px;
      }

      &:hover {
        color: ${shade(0, '#ff9000')};
      }
    }
  }

  @media (max-width: 700px) {
    a {
      &.title {
        display: none;
        background: none;
      }
    }
  }
  @media (max-width: 940px) {
    a {
      &.title {
        display: none;
        background: none;
      }
    }
  }
  @media (max-width: 300px) {
    min-height: 0;
    margin-top: 0;
    padding: 0 0;
    img {
      height: 40px;
    }
  }
`;

export const Footer = styled(motion.footer)`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    li {
      list-style: none;
      font-size: 20px;

      & + li {
        margin: 10px 0 0;
      }

      a {
        &.footer {
          text-decoration: none;
          color: #f1eded;
          transition: color 0.2s;
          font-weight: bold;

          &:hover {
            color: #000;
          }
        }
      }
    }
  }

  margin-bottom: 30px;
  @media (min-width: 600px) {
    margin-bottom: 38px;
    ul {
      flex-direction: row;

      li + li {
        margin: 0 0 0 30px;
      }
    }
  }
  @media (max-width: 340px) {
    a {
      display: none;
    }
  }
`;
