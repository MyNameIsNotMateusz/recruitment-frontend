import "../styles/warning.css";
import Resources from "../data/resources";

const Warning = () => {
 
 return (
    <div class="warning-container active">
     <div class="warning-container__content">
      <img src={Resources.warning} class="warning-container__icon" />

      <div class="warning-container__message">
       <span class="warning-container__text warning-container__text--1">Warning</span>
       <span class="warning-container__text warning-container__text--2">Select one of the three available options</span>
      </div>
     </div>


     <div class="warning-container__progress"></div>
    </div>
 )
}

export default Warning;