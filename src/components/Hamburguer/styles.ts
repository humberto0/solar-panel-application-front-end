import styled from 'styled-components';

export const StyledHamburger = styled.button<{ open: boolean }>`
  display: none;
  @media (max-width: 940px) {
    position: fixed;
    left: ${({ open }) => (open ? '29vw' : '3vw')};
    margin-top: 0;
    width: 2rem;
    height: 2rem;
    padding: 0;
    background: transparent;

    display: flex;
    flex-direction: column;
    justify-content: space-around;

    border: none;
    cursor: pointer;
    outline: none;
    margin-left: 90%;
    z-index: 1;

    div {
      position: relative;
      width: 2rem;
      height: 0.25rem;
      border-radius: 10px;
      transition: all 0.3s linear;
      transform-origin: 1px;
      background-color: ${({ open }) => (open ? '#f4ede8' : '#f4ede8')};

      :first-child {
        transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
      }

      :nth-child(2) {
        opacity: ${({ open }) => (open ? '0' : '1')};
        transform: ${({ open }) =>
          open ? 'translateX(20px)' : 'translateX(0)'};
      }

      :nth-child(3) {
        transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
      }
    }
  }
  @media (max-width: 608px) {
    left: ${({ open }) => (open ? 'initial' : '3vw')};
    right: ${({ open }) => (open ? '2vw' : 'initial')};
    margin-left: 80%;
  }
`;
