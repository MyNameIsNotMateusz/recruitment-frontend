import "../styles/warning.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

const Warning = () => {

   return (
      <div class="warning-container">
         <div class="warning-container__content">
            <FontAwesomeIcon className="warning-container__icon" icon={faCircleExclamation} style={{ color: "#e88404", }} />
            <div class="warning-container__message">
               <span class="warning-container__text warning-container__text--1">Warning</span>
               <span class="warning-container__text warning-container__text--2">Wybierz jedną z trzech dostępnych opcji.</span>
            </div>
         </div>


         <div class="warning-container__progress"></div>
      </div>
   )
}

export default Warning;