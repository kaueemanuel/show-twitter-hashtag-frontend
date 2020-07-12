import React, { useState, useEffect } from "react";
import { Container } from "./styles.js";
import Card from "../../Components/Card/Card";
import Cores from "../../Cores";
import API from "../../Axios/API";

export default function Tweet({ item, painel = false }) {

  const { _id, nome, state, text, username, timestamp } = item;
  let dataString = new Date(timestamp).toLocaleTimeString();



  const aprovaTweet = async (id) => {
    await API.get(`api/tweets/aprovar/${id}`);
  };
  const reprovaTweet = async (id) => {
    await API.get(`api/tweets/reprovar/${id}`);
  };

  return (
    <Container>
      <Card backgroundColor={Cores.backgroundHigh} className="card">
        <div className="nome">
          {nome}
          <span className="username"> - @{username}</span>
        </div>
        <div className="text">{text}</div>
        <div className="data">{dataString}</div>
        <div className="btns-box">
          {(state === 0 || state === 1) && !painel && (
            <button className="reprovado" onClick={() => reprovaTweet(_id)}>
              &#10007;
            </button>
          )}
          {(state === 0 || state === -1) && !painel && (
            <button className="aprovado" onClick={() => aprovaTweet(_id)}>
              &#10003;
            </button>
          )}
        </div>
      </Card>
    </Container>
  );
}
