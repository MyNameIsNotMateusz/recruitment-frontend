import "../styles/appfunctionality.scss";
import { replaceHistory, visibleHistory, addHistory } from "../features/coreFeature/historiesDataSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Components from "../data/components";

const AppFunctionality = () => {

  //I saved useDispatch to the dispatch variable to be able to perform actions.
  const dispatch = useDispatch();

  //this useState stores the currently selected options.
  const [option, setOption] = useState(null);

  //When the history changes, it triggers a use effect that adds it to local storage.
  const history = useSelector(visibleHistory);

  useEffect(() => {
    window.localStorage.setItem("MY_HISTORY", JSON.stringify(history));
  }, [history])


  return (
      <div className="main__content">

      <Components.Warning />

        <div className="main__content-item">
          <h3>BLOK PIERWSZY</h3>
          <div className="main__content-item-radios">

            <label>
              <input onChange={() => setOption(1)} type="radio" name="options" value="option1" />
              <div class="circle"></div>
              <span>Opcja pierwsza</span>
            </label>
            <label>
              <input onChange={() => setOption(2)} type="radio" name="options" value="option2" />
              <div class="circle"></div>
              <span>Opcja druga</span>
            </label>
            <label>
              <input onChange={() => setOption(3)} type="radio" name="options" value="option3" />
              <div class="circle"></div>
              <span>Opcja losowa</span>
            </label>

          </div>
        </div>
        <div className="main__content-item main__content-item--end">
          <h3>BLOK DRUGI</h3>
          <div className="main__content-item-buttons">
            <button onClick={() => dispatch(replaceHistory(option))}>ZASTĄP</button>
            <button onClick={() => dispatch(addHistory(option))}>DOKLEJ</button>
          </div>
        </div>
        <div className="main__content-item main__content-item--wide">
          <h3>BLOK BLOK Z DŁUGĄ NAZWĄ KTÓRA SAMA SIĘ PRZYTNIE</h3>
          <p className="main__content-item-text">{history}
          </p>
        </div>
      </div>
  )
}

export default AppFunctionality;
