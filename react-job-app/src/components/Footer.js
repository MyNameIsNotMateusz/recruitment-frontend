import "../styles/footer.css";
import Resources from "../data/resources";

const Footer = () => {

  // The function to show two options - reset settings and show personal data.
  const showMoreOption = () => {

    // I select the arrow icon and the div that contains these two options.
    const arrowUp = document.querySelector(".arrowUp");
    const options = document.querySelector(".main-options");

    // I retrieve all the current classes that the arrow icon contains and save them to an array.
    const classArray = arrowUp.classList.value.split(' ');

    // I add or remove the rotated class which is used to rotate the arrow 180 degrees.
    arrowUp.classList.toggle("rotated");


    // Adds a conditional to check if the rotated class is in the current arrow icon classes.Based on the result, I show or hide the div with two options.
    if (classArray.includes("rotated")) {
      options.style.height = "0%";
      options.style.opacity = "0";
    } else {
      options.style.height = "100%";
      options.style.opacity = "1";
    }
  }

  return (
    <div className="footer">
      <div className="footer-label">
        CSS <br /> IS <br /> AWESOME
      </div>
      <div className="footer-label-container">
        <div>
        </div>
      </div>
      <div className="footer-author--container">
        <button />
        <p>nabthat</p>
        <button />
      </div>
      <button onClick={showMoreOption} className="footer-button">
        POKAŻ
        <img src={Resources.arrowup} alt="Arrow Up" className="arrowUp " />
      </button>
    </div>
  )
}

export default Footer;