import { Link } from "react-router-dom";

const Error = () => {
   return(
      <div className="error-page">
         <h1>404</h1>
         <h4>Сторінку не знайдено</h4>
         <Link to={-1} className="error-page-button">Назад</Link>
      </div>
   )
}

export default Error;