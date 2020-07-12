import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, ContainerCont } from "./styles.js";

import API from "../../Axios/API";

import Tweet from "../../Components/Tweet/Tweet";

import Card from "../../Components/Card/Card";

import useSocketIo from "../../Hooks/Socket.hook";

function EscolhaTweets() {
  const {
    hashtag,
    monitorando,
    tweets,
    tweetsAprovados,
    tweetsReprovados,
    setMonitorando,
  } = useSocketIo();

  const [hashtagLocal, setHashtagLocal] = useState(hashtag);

  useEffect(() => {
    setHashtagLocal(hashtag);
  }, [hashtag]);


  const monitorar = async () => {
    if (monitorando) {
      stopStream();
      setHashtagLocal("");
      setMonitorando(!monitorando);
    } else {
      if(hashtagLocal.trim().length > 0){
        setMonitorando(!monitorando);
        startStream();
      } 
    }
  };

  const startStream = async () => {
    await API.get(`api/tweets/iniciar/${encodeURIComponent(hashtagLocal)}`);
  };
  const stopStream = async () => {
    await API.get(`api/tweets/parar`);
  };

  return (
    <div>
      <Container>
        <Link to="/painel" className="envia-painel">
          Painel
        </Link>

        <div className="hashtag">
          <input
            className={monitorando ? "disabled" : ""}
            onChange={(event) => setHashtagLocal(event.target.value)}
            placeholder="Informe uma Hashtag #"
            value={hashtagLocal}
          />
          <button onClick={monitorar}>
            {monitorando ? "Parar Monitoramento" : "Monitorar"}
          </button>
        </div>
      </Container>
      <ContainerCont>
        <Card className="card" margin="10px 0px">
          <div className="titulo">Pendentes</div>
          {tweets.map((item) => <Tweet key={item._id} item={item} />)}
        </Card>
        <Card className="card" margin="10px 0px">
          <div className="titulo rep">Reprovados &#10007;</div>
          {tweetsReprovados
            .slice(0)
            .reverse()
            .map((item) => <Tweet key={item._id} item={item} />)}
        </Card>
        <Card className="card" margin="10px 0px">
          <div className="titulo apro">Aprovados &#10003;</div>
          {tweetsAprovados
            .slice(0)
            .reverse()
            .map((item) => <Tweet key={item._id} item={item} />)}
        </Card>
      </ContainerCont>
    </div>
  );
}

export default React.memo(EscolhaTweets);
