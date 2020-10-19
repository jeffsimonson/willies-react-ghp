import React from "react";

function Error() {
  const errorStyle = {
    color: "black",
    backgroundColor: "#fff",
    padding: "10px",
    fontFamily: "Arial",
    fontSize: "160px",
    fontWeight: "bold",
    margin: "0 auto",
    paddingTop: "100px",
    paddingBottom: "100px",
    textAlign: "center",
    alignItems: "center",
  };

  return (
    <div style={errorStyle}>
      <div>404</div>
      <h1 style={{ textAlign: "center", fontSize: "32px" }}>
        Oops! Page not found!
      </h1>
    </div>
  );
}

export default Error;
