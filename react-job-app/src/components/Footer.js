import "../styles/footer.css";
import Resources from "../data/resources";

const Footer = () => {

 const showMoreOption = () => {

  const arrowUp = document.querySelector(".arrowUp");
  const arrowDown = document.querySelector(".arrowDown");

  if (arrowUp.style.visibility != "hidden") {
   arrowUp.style.width = "0px";
   arrowUp.style.visibility = "hidden";
   arrowDown.style.width = "10px";
   arrowDown.style.visibility = "visible";
  } else {
   arrowUp.style.width = "10px";
   arrowUp.style.visibility = "visible";
   arrowDown.style.width = "0px";
   arrowDown.style.visibility = "hidden";
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
    <img src={Resources.arrowup} alt="Arrow Up" className="arrowUp" />
    <img src={Resources.arrowdown} alt="Arrow Down" className="arrowDown" />
   </button>
  </div>
 )
}

export default Footer;