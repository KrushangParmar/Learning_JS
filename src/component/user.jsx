import React from "react";

function user(props) {
  return (
    <>
      <div className="d-block mx-3">
        <h1>Hello {props.name}</h1>
        <p>I am working on {props.expert}</p>
      </div>
    </>
  );
}

export default user;
