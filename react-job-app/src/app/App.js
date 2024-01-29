import React, { useState, useEffect } from "react";
import "../styles/app.scss";
import Components from "../data/components";

const App = () => {

  return (
    <div className="container">
      <Components.Main />
      <Components.Footer />
    </div>
  );
};

export default App;
