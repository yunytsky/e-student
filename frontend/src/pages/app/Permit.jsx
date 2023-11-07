import testPhoto from "../../assets/permit-test-photo.png";

const Permit = () => {
    return (
      <div className="permit">
        <h3>Електронна перепустка</h3>
        <div className="card">
          <div className="card-number">
            <h5>Перепустка</h5>
            <span>№ 378425</span>
          </div>
          <div className="card-photo">
            <img src={testPhoto} alt="photo" />
          </div>
          <div className="card-info">
            <h4 className="card-holder-name">Коваль Сергій Іванович</h4>
            <span>Гуртожиток: № 10</span>
            <span>Кімната: №100</span>
            <span>
              Дійсний з <strong>01.09.2023</strong>
            </span>
            <span>
              До <strong>30.06.2023</strong>
            </span>
          </div>
        </div>
      </div>
    );    
};

export default Permit;