import styled from 'styled-components';
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
    justify-content: start;
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
export const StyledMenu = styled.nav<{ open: boolean }>`
  top: 0;
  left: 0;
  height: 100vh;
  width: 35vw;
  position: fixed;
  background-color: rgba(0, 0, 3, 0.85);
  z-index: 1;

  display: flex;
  flex-direction: column;
  padding: 10rem 0;

  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  a {
    padding: 0 2rem;
    font-weight: 700;
    text-align: start;
    font-size: 20.5px;
    background: transparent;
    width: 100%;
    color: #f1eded;
    text-decoration: none;
    cursor: pointer;
    & + a {
      margin-top: 16px;
    }
    &:hover {
      color: #ff9000;
    }
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const StyledLink = styled.a``;
