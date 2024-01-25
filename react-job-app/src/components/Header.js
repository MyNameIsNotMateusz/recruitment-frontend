import "../styles/header.css";
import Resources from "../data/Resources";
import { useEffect, useState } from "react";

const Header = (props) => {

 const [showFullname, setShowFullname] = useState(false);

 useEffect(() => {

  showFullname ? setShowFullname(false) : setShowFullname(true)

 }, [props.toggle])

 return (
  <div className="header">
   <a href="/">
    <div className="header-logo">
     <img src={Resources.htmlImage} alt="HTML5 Icon" />
    </div>
   </a>
   <div className="header-caption">
    <p className="header-caption-label">Zadanie <span>rekrutacyjne</span></p>
    <p className="header-caption-fullname" style={{ height: showFullname ? '23px' : '0', visibility: showFullname ? 'visible' : 'hidden' }}>Mateusz Otorowski</p>
   </div>
  </div>
 )
};

export default Header;