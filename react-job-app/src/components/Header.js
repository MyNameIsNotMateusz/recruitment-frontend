import "../styles/header.scss";
import { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';

const Header = (props) => {


  // Adds a useEffect hook that triggers every time props.toggle changes. If it changes, it toggles the display of the first and last name.
  useEffect(() => {

    const fullname = document.querySelector(".header__caption-fullname");

    fullname.classList.toggle("show");

  }, [props.toggle])


  return (
    <header>
      <a href="/">
        <div className="header__logo">
          <FontAwesomeIcon className="header__logo-htmlIcon" icon={faHtml5} style={{color: "#ffffff",}} />
        </div>
      </a>
      <div className="header__caption">
        <p className="header__caption-label">Zadanie <span>rekrutacyjne</span></p>
        <p className="header__caption-fullname">Mateusz Otorowski</p>
      </div>
    </header>
  )
};

export default Header;