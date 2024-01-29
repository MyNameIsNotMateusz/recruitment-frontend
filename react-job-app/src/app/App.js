import React, { useState, useEffect } from "react";
import "../styles/app.scss";
import Components from "../data/components";

const App = () => {

  //I add a countdown for two seconds to make sure that the data from the json file is downloaded.
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
