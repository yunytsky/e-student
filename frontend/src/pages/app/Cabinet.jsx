import { Link } from "react-router-dom";

const Cabinet = () => {
 return(
    <>
        <div className="cabinet">
            <h3>Коваль Сергій Іванович</h3>
            <p>Студентський квиток: СК № 00000000</p>
            <p>Факультет комп’ютерних наук та кібернетики</p>

            <Link to="#">Зареєструватись як мешканець гуртожитку</Link>
        </div>

    </>
 );
};

export default Cabinet;