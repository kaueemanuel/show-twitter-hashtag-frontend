import React, { useState, useEffect } from "react";
import { Container } from "./styles.js";

function Card(props) {
  const [classes, setClasses] = useState("");
  useEffect(() => {
    if (props.className) {
      setClasses(classes + props.className);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]); 
  return (
    <Container className={classes} margin={props.margin} backgroundColor={props.backgroundColor} key={props.key}>
      {props.children}
    </Container>
  );
}

export default React.memo(Card);
