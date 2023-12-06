import { Link } from "react-router-dom";

const NotAllowed = () => {
   return(
      <div className="error-page">
         <h1>Помилка</h1>
         <h4>Вибачте, ви не мешканець гуртожитку</h4>
         <Link to={"/app/student/cabinet"} className="error-page-button">Назад</Link>
      </div>
   )
}

export default NotAllowed;