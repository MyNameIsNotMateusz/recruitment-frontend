import "../styles/appfunctionality.css";

const AppFunctionality = () => {

 return (
  <div className="main__content">
   <div className="main__content-item">
    <h4>BLOK PIERWSZY</h4>
    <div className="main__content-item-radios">

     <label>
      <input type="radio" name="options" value="option1" />
       <div class="circle"></div>
       <span>Opcja pierwsza</span>
     </label>
     <label>
      <input type="radio" name="options" value="option2" />
       <div class="circle"></div>
       <span>Opcja druga</span>
     </label>
     <label>
      <input type="radio" name="options" value="option3" />
       <div class="circle"></div>
       <span>Opcja losowa</span>
     </label>

    </div>
   </div>
   <div className="main__content-item">
    <h4>BLOK DRUGI</h4>
    <div className="main__content-item-buttons">
     <button>ZASTĄP</button>
     <button>DOKLEJ</button>
    </div>
   </div>
   <div className="main__content-item">
    <h4>BLOK BLOK Z DŁUGĄ NAZWĄ KTÓRA SAMA SIĘ PRZYTNIE</h4>
    <p className="main__content-item-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </p>
   </div>
  </div>
 )
}

export default AppFunctionality;