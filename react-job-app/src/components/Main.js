import "../styles/main.scss";
import { useEffect, useState } from "react";
import Components from "../data/components";
import { clearHistory } from "../features/coreFeature/historiesDataSlice";
import { useDispatch } from "react-redux";

const Main = () => {

 //I added a loading effect to download everything from the json file.
 const [loading, setLoading] = useState(true);

 useEffect(() => {
  setTimeout(() => {
   setLoading(false);
  }, 1000)
 }, [])

 // I'm creating a boolean useState to pass true or false as props to the Header component. When true, it displays the first and last name; when false, it hides them.
 const [toggle, setToggle] = useState(false);


 //I saved useDispatch to the dispatch variable to be able to perform actions.
 const dispatch = useDispatch();

 return (
  <>
   <Components.Header toggle={toggle} />

   <div className="main">

    <div className="main__header">
     <h1>Nagłówek H1</h1>
     <button />
    </div>

   {loading ? <Components.LoadingSketelon /> : <Components.AppFunctionality />}

    <div className="main__options-container">
     <div className="main__options">
      <div className="main__options-item" onClick={() => dispatch(clearHistory())}>
       <svg width="12px" height="12px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.82054 20.7313C8.21107 21.1218 8.84423 21.1218 9.23476 20.7313L15.8792 14.0868C17.0505 12.9155 17.0508 11.0167 15.88 9.84497L9.3097 3.26958C8.91918 2.87905 8.28601 2.87905 7.89549 3.26958C7.50497 3.6601 7.50497 4.29327 7.89549 4.68379L14.4675 11.2558C14.8581 11.6464 14.8581 12.2795 14.4675 12.67L7.82054 19.317C7.43002 19.7076 7.43002 20.3407 7.82054 20.7313Z" fill="#000000" />
       </svg>
       <p>ZRESETUJ USTAWIENIA</p>
      </div>
      <div onClick={() => setToggle(!toggle)} className="main__options-item">
       <svg width="12px" height="12px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.82054 20.7313C8.21107 21.1218 8.84423 21.1218 9.23476 20.7313L15.8792 14.0868C17.0505 12.9155 17.0508 11.0167 15.88 9.84497L9.3097 3.26958C8.91918 2.87905 8.28601 2.87905 7.89549 3.26958C7.50497 3.6601 7.50497 4.29327 7.89549 4.68379L14.4675 11.2558C14.8581 11.6464 14.8581 12.2795 14.4675 12.67L7.82054 19.317C7.43002 19.7076 7.43002 20.3407 7.82054 20.7313Z" fill="#000000" />
       </svg>
       <p>POKAŻ DANE OSOBOWE</p>
      </div>
     </div>
    </div>

   </div>
  </>
 )
}

export default Main;