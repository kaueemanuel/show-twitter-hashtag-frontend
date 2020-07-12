import styled from "styled-components";
import Cores from "../../Cores";

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding-left: 5px;
  padding-right: 5px;
  padding-top: 20px;
  padding-bottom: 20px;
  transition: all 0.2s ease-in-out;
  justify-content: space-between;

  .hashtag {
    display: flex;
    align-items: center;
  }

  .disabled {
    pointer-events: none;
    opacity: 0.8;
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
    transition : all .2s ease-in-out;
    font-size: 1.2em;

    :hover {
      background-color: white;
      color: ${Cores.secondary};
    }
  }

  input {
    background: none;
    outline: none;
    border: 1px solid rgba(255, 255, 255, 0.2);
    padding: 5px 15px;
    border-radius: 4px;
    font-size: 1.5em;
    color: rgba(255, 255, 255, 0.5);
    transition: all 0.2s ease-in-out;
  }

  button {
    cursor: pointer;
    background-color: ${Cores.primary};
    margin-left: 10px;
    height: 40px;
    outline: none;
    border: 1px solid transparent;
    padding: 5px 15px;
    border-radius: 4px;
    font-size: 1.2em;
    color: rgba(255, 255, 255, 1);
    transition: all 0.2s ease-in-out;

    :hover {
      background-color: white;
      color: ${Cores.primary};
    }
  }
`;

export const ContainerCont = styled.div`
  display: flex;
  width: 100%;
  overflow-y: auto;
  max-height: 100%;
  justify-content: space-between;
  .card {
    min-height: 100px;
    min-width: 300px;
    margin-left: 5px;
    margin-right: 5px;
    max-width: 370px;
    position: relative;
    overflow: hidden;
    padding-top: 55px;
    .titulo {
      text-transform: uppercase;
      letter-spacing: 0.2em;
      font-size: 16px;
      font-weight: 600;
      color: rgba(255, 255, 255, 0.8);
      width: 100%;
      background-color: ${Cores.primary};
      position: absolute;
      left: 0;
      top: 0;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .rep {
      background-color: ${Cores.red};
    }
    .apro {
      background-color: ${Cores.green};
    }
  }
`;
