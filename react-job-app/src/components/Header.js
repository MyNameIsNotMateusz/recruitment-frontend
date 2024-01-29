import "../styles/header.scss";
import Resources from "../data/resources";
import { useEffect } from "react";

const Header = (props) => {


  // Adds a useEffect hook that triggers every time props.toggle changes. If it changes, it toggles the display of the first and last name.
  useEffect(() => {

    const fullname = document.querySelector(".header__caption-fullname");

    fullname.classList.toggle("show");

  }, [props.toggle])


  return (
    <div className="header">
      <a href="/">
        <div className="header__logo">
          <img src={Resources.htmlImage} alt="HTML5 Icon" />
        </div>
      </a>
      <div className="header__caption">
        <p className="header__caption-label">Zadanie <span>rekrutacyjne</span></p>
        <p className="header__caption-fullname">Mateusz Otorowski</p>
      </div>
    </div>
  )
};

export default Header;