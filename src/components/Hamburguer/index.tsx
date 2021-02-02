import React from 'react';

import { StyledHamburger } from './styles';

export type Props = {
  open: boolean;
  setOpen: (v: boolean) => void;
};

const Hamburger = (props: Props) => (
  // eslint-disable-next-line react/destructuring-assignment
  <StyledHamburger open={props.open} onClick={() => props.setOpen(!props.open)}>
    <div />
    <div />
    <div />
  </StyledHamburger>
);

export default Hamburger;
