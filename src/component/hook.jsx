import React, { useEffect } from "react";
import { useState } from "react";

function hook() {
  let count = 0;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [currentState, updateState] = useState(count);

  const resetcount = () => {
    updateState(0);
  };
  const countdown = () => {
    updateState(currentState + 1);
  };
  if (currentState > 25) {
    updateState(0);
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    window.alert("You are clicked " + currentState);
  });
  var converter = require("number-to-words");
  var words = converter.toWords(currentState);

  return (
    <>
      <div className="d-block my-2 mx-auto bg-dark text-light">
        <h1 className="d-flex justify-content-center"> Counter </h1>{" "}
        <button className="py-2 px-4 m-2" onClick={resetcount}>
          Reset Number{" "}
        </button>{" "}
        <button className="py-2 px-4 m-2"> {currentState} </button>{" "}
        <button className="py-2 px-4 m-2" onClick={countdown}>
          &rarr;{" "}
        </button>{" "}
        <h2 className="d-flex justify-content-center"> {words} </h2>{" "}
      </div>{" "}
    </>
  );
}

export default hook;
