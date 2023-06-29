import React from "react";
import myAlert from "~/myAlert";

function Button(props) {
  return (
    <button onClick={myAlert}>
      Click me !
    </button>
  );
}

export default Button;
