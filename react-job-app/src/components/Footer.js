import "../styles/footer.scss";

const Footer = () => {

  // The function to show two options - reset settings and show personal data.
  const showMoreOption = () => {

    // I select the arrow icon and the div that contains these two options.
    const arrowUp = document.querySelector(".footer__arrow-up");
    const options = document.querySelector(".main__options");

    // I retrieve all the current classes that the arrow icon contains and save them to an array.
    const classArray = arrowUp.classList.value.split(' ');

    // I add or remove the rotated class which is used to rotate the arrow 180 degrees.
    arrowUp.classList.toggle("rotated");

    // Check the screen width to adjust the height of the options bar.
    const screenWidth = window.innerWidth;

    // Adds a conditional to check if the rotated class is in the current arrow icon classes.Based on the result, I show or hide the div with two options.
    if (classArray.includes("rotated")) {
      options.style.height = "0%";
      options.style.opacity = "0";
    } else {
      if (screenWidth <= 800 && screenWidth > 450) {
        options.style.height = "60%";
        options.style.opacity = "1";
      } else if (screenWidth <= 450 && screenWidth > 300) {
        options.style.height = "45%";
        options.style.opacity = "1";
      } else if (screenWidth <= 300) {
        options.style.height = "40%";
        options.style.opacity = "1";
      } else {
        options.style.height = "75%";
        options.style.opacity = "1";
      }
    }
  }

  return (
    <div className="footer">
      <div className="footer__label">
        CSS <br /> IS <br /> AWESOME
      </div>
      <div className="footer__label-container" />
      <div className="footer__author-container">
        <button />
        <p>nabthat</p>
        <button />
      </div>
      <button onClick={showMoreOption} className="footer__button">
        POKAŻ
        <svg transform="rotate(270)" className="footer__arrow-up" width="12px" height="12px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.82054 20.7313C8.21107 21.1218 8.84423 21.1218 9.23476 20.7313L15.8792 14.0868C17.0505 12.9155 17.0508 11.0167 15.88 9.84497L9.3097 3.26958C8.91918 2.87905 8.28601 2.87905 7.89549 3.26958C7.50497 3.6601 7.50497 4.29327 7.89549 4.68379L14.4675 11.2558C14.8581 11.6464 14.8581 12.2795 14.4675 12.67L7.82054 19.317C7.43002 19.7076 7.43002 20.3407 7.82054 20.7313Z" fill="#000000" />
        </svg>
      </button>
    </div>
  )
}

export default Footer;