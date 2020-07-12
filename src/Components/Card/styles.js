import styled from "styled-components";

import Cores from "../../Cores";

export const Container = styled.div`
  margin: ${(props) => props.margin || '10px'};;
  border-radius: 4px;
  padding: 10px 30px;
  background: ${(props) => props.backgroundColor || Cores.backgroundMed};
  color: rgba(255, 255, 255, 0.5);
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 2px 1px -1px rgba(0, 0, 0, 0.12), 0 1px 3px 0 rgba(0, 0, 0, 0.2);
`;
