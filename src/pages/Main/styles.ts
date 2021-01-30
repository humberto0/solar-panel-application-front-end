import styled from 'styled-components';
import sol from '../../assets/1.jpg';
import sol2 from '../../assets/10.png';
import sol3 from '../../assets/13.png';
import sol4 from '../../assets/14.png';
import sol5 from '../../assets/19.png';

export const Container = styled.div`
  .img:nth-child(1) {
    background: url(${sol}) no-repeat;
    background-size: cover;
  }

  .img:nth-child(2) {
    background: url(${sol2}) no-repeat;
    background-size: cover;
  }

  .img:nth-child(3) {
    background: url(${sol3}) no-repeat;
    background-size: cover;
  }

  .img:nth-child(4) {
    background: url(${sol4}) no-repeat;
    background-size: cover;
  }

  .img:nth-child(5) {
    background: url(${sol5}) no-repeat;
    background-size: cover;
  }
`;
export const Spacer = styled.div`
  height: 15vh;
  background: #343434;
`;
