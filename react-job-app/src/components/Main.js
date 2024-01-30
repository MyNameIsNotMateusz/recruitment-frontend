import "../styles/main.scss";
import { useEffect, useState } from "react";
import Components from "../data/components";
import { clearSentences, loadData, selectedSentences } from "../features/coreFeature/sentencesSlice";
import { useDispatch, useSelector } from "react-redux";

const Main = () => {

 //I saved useDispatch to the dispatch variable to be able to perform actions.
 const dispatch = useDispatch();

  //I added a loading effect to download everything from the json file.
  const [loading, setLoading] = useState(true);

  //I create a variable to store my state.
  const sentences = useSelector(selectedSentences);

 //It calls the function asynchronously and adds data from the json file to my state.
 useEffect(() => {
  dispatch(loadData());

  //Once the data is loaded, I turn on the application.
  if (sentences) {
   setTimeout(() => {
    setLoading(false);
   }, 1000)
  }

 }, [dispatch, sentences])

 return (
  <>
   <main>
    <div className="main__header">
     <h1>Nagłówek H1</h1>
     <button />
    </div>
    
    {loading ? <Components.LoadingSketelon /> : <Components.AppFunctionality />}

   </main>
  </>
 )
}

export default Main;