import { useSelector } from "react-redux";
import { useEffect } from "react";

const Permit = () => {
   const resident = useSelector((state) => state.auth.value.user_resident);
   
   
   return (
      <div className="permit">
        <h3>Електронна перепустка</h3>
        <div className="card">
          <div className="card-number">
            <h5>Перепустка</h5>
            <span>№ {resident.passNumber}</span>
          </div>
          <div className="card-info">
          <div className="card-photo">
            <img src={"http://localhost:7150/" + resident.passNumber + ".png" }alt="photo" />
          </div>
          <div className="card-main">
            <h4 className="card-holder-name">{resident.fullName}</h4>
            <div className="card-holder-info">
                <span>Гуртожиток: № {resident.dormNumber}</span>
                <span>Кімната: №{resident.room}</span>
            </div>
            <div className="card-expiration-date">
                <span>
                  Дійсний з <strong>{new Date(resident.issued).toLocaleDateString('en-GB')}</strong>
                </span>
                <span>
                  До <strong>{new Date(resident.expires).toLocaleDateString('en-GB')}</strong>
                </span>
            </div>
          </div>
          </div>
        </div>
      </div>
    );    
};

export default Permit;