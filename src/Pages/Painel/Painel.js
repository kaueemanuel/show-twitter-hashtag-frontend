import React from "react";
import { Container } from "./styles.js";
import { Link } from "react-router-dom";
import useSocketIo from "../../Hooks/Socket.hook";
import Tweet from "../../Components/Tweet/Tweet";

function Painel() {
  const { hashtag, tweetsAprovados } = useSocketIo();

  return (
    <Container>
      <div className="header">
        <div>
          <Link to="/" className="envia-painel">
            Controle
          </Link>
        </div>
        <div className="hashtag">
          {hashtag || "Aguardando Monitoramento..."}
        </div>
      </div>
      <div className="conteudo">
        {tweetsAprovados
          .slice(0)
          .reverse()
          .map((item) => (
            <div className="tweets">
              <Tweet
                className="custom-card"
                key={item._id}
                item={item}
                painel={true}
              />
            </div>
          ))}
      </div>
    </Container>
  );
}

export default React.memo(Painel);
