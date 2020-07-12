import styled from "styled-components";
import Cores from './Cores';

export const Container = styled.div`
  background: ${Cores.background};
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  position: fixed;
  overflow-x: hidden;
  display: flex;
  justify-content: center;

  .container {
    width: 100%;
    max-width: 1200px;
    padding: 30px 20px;
  }
`;
