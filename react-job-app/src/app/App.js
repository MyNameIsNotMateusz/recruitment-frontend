import React, { useState, useEffect } from "react";
import "../styles/app.css";
import Components from "../data/components";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={isLoading ? "app__loading" : "container"}>
      {isLoading ? (
        <Components.Loader />
      ) : (
        <>
          <Components.Main />
          <Components.Footer />
        </>
      )}
    </div>
  );
};

export default App;
