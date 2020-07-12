import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import { Container } from "./styles.js";

import EscolhaTweets from "./Pages/EscolhaTweets/EscolhaTweets";
import Painel from "./Pages/Painel/Painel";


function App() {
  return (
    <Container>
      <div className="container">
        <BrowserRouter>
          <Switch>
            <Route
              path="/"
              exact
              component={EscolhaTweets}
            />
            <Route
              path="/painel"
              component={Painel}
            />
          </Switch>
        </BrowserRouter>
      </div>
    </Container>
  );
}

export default App;
