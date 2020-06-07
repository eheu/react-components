import React, { useState } from "react";

export const ReactCounter = () => {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        fontFamily: "Arial, Helvetica, sans-serif",
        display: "grid",
        gridTemplateRows: "auto auto auto",
        alignItems: "center",
        justifyItems: "center",
        border: "1px solid black",
        width: "220px",
        padding: "2px",
      }}
    >
      <h1 style={{ margin: "0px" }}>Count: </h1>
      <div id="count" style={{ margin: "10px" }}>
        {count}
      </div>
      <button
        style={{
          display: "grid",
          alignItems: "center",
          justifyItems: "center",
          border: "none",
          textDecoration: "none",
          backgroundColor: "blue",
          color: "white",
          fontFamily: "inherit",
          fontSize: "16px",
          padding: "15px 32px",
        }}
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </div>
  );
};
