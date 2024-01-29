import "../styles/loadingsketelon.scss";

const LoadingSketelon = () => {

 return (
  <div className="loading__container">
   <div className="loading__container-item">
    <div className="loading__container-item--header" style={{ width: '80%' }} />
    <div className="loading__container-item--progress-bar" style={{ width: '45%', height: '10px' }} />
    <div className="loading__container-item--progress-bar" style={{ width: '70%', height: '10px' }} />
    <div className="loading__container-item--progress-bar" style={{ width: '20%', height: '10px' }} />
   </div>
   <div className="loading__container-item">
    <div className="loading__container-item--header" style={{ width: '95%' }} />
    <div className="flex-container">
     <div />
     <div />
    </div>
   </div>
   <div className="loading__container-item loading__container-item--wide">
    <div className="loading__container-item--header" style={{ width: '90%' }} />
    <div className="loading__container-item--progress-bar" style={{ width: '100%', height: '10px' }} />
    <div className="loading__container-item--progress-bar" style={{ width: '95%', height: '10px' }} />
    <div className="loading__container-item--progress-bar" style={{ width: '90%', height: '10px' }} />
    <div className="loading__container-item--progress-bar" style={{ width: '100%', height: '10px' }} />
   </div>
  </div>
 )

};

export default LoadingSketelon;