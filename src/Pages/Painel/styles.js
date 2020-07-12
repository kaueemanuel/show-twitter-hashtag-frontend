import styled from "styled-components";
import Cores from "../../Cores";

export const Container = styled.div`
  .header {
    padding-top: 20px;
    display: flex;
    width: 100%;
    justify-content: start;
    color: rgba(255, 255, 255, 0.6);
    letter-spacing: 0.3em;
    font-weight: 600;
    position: relative;

    .hashtag {
      font-size: 25px;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }

    .envia-painel {
      background: none;
      border: 1px solid rgba(255, 255, 255, 0.2);
      position: relative;
      padding: 0px 15px;
      border-radius: 4px;
      height: 40px;
      text-decoration: none;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all 0.2s ease-in-out;

      :hover {
        background-color: white;
        color: ${Cores.secondary};
      }
    }
  }

  .conteudo {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
    padding-top: 20px;

    .tweets {
      width: 370px;
      padding: 0 10px;
    }
  }
`;
