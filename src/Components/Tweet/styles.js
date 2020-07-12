import styled from 'styled-components';
import Cores from "../../Cores";

export const Container = styled.div`
  .card {
    font-size: 16px;
    padding: 15px;
    padding-bottom: 25px;
    margin: 10px 0;
    position: relative;
    height: 145px;

    .nome {
      color: ${Cores.primary};
      font-weight: 600;
    }
    .username {
      font-size: 14px;
      color: rgba(255, 255, 255, 0.5);
      font-weight: 600;
    }
    .text {
      font-size: 14px;
      margin-top: 5px;
      padding-bottom: 30px;
      color: ${Cores.secondary};
      font-weight: 500;
    }
    .data {
      position: absolute;
      bottom: 15px;
      right: 15px;
      font-size: 12px;
      text-align: right;
      margin-top: 5px;
      color: rgba(255, 255, 255, 0.5);
      font-weight: 500;
    }
    .btns-box {
      position: absolute;
      bottom: 15px;
      left: 15px;
      display: flex;
      height: 30px;
      align-items: center;
      justify-content: color-interpolation-filters;

      button {
        cursor: pointer;
        border-radius: 4px;
        border: none;
        width: 40px;
        height: 30px;
        padding: 0;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.2s ease-in-out;

        :hover {
          opacity: 0.8;
        }
      }

      .aprovado {
        background-color: ${Cores.green};
      }
      .reprovado {
        margin-right: 5px;
        background-color: ${Cores.red};
      }
    }
  }
`;
