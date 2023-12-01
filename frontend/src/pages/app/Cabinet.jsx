import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Table from "../../components/app/Table";
import { useSelector } from "react-redux";

const Cabinet = (props) => {
    const user = useSelector(state => state.auth.value.user);
    const [date, setDate] = useState("");
    const [data, setData] = useState([]);
    const [columns, setColumns] = useState([]);
    

    useEffect(() => {
        if(props.type === "dweller"){
          //Date
          const today = new Date();

          const day = today.getDate();
          const month = today.getMonth();
          const year = today.getFullYear();

          const date =
            String(day) + "/" + String(month + 1) + "/" + String(year);

          setDate(date);
          //Table
          setData([
            ["09/09/2023", "+2400 грн", "2400 грн"],
            ["09/09/2023", "+2400 грн", "2400 грн"],
            ["09/09/2023", "+2400 грн", "2400 грн"],
            ["09/09/2023", "+2400 грн", "2400 грн"],
            ["09/09/2023", "+2400 грн", "2400 грн"],
            ["09/09/2023", "+2400 грн", "2400 грн"],
          ]);

          setColumns([
            {
              name: "Дата",
            },
            {
              name: "Сума",
            },
            {
              name: "Залишок",
            },
          ]);
        }
    }, [date])

    useEffect(() => {
      console.log(user)
    }, [user])

 return (
   <>
     <div className="cabinet">
       <h3>{user.FullName}</h3>
       <div className="cabinet-student-info">
         <p>Студентський квиток: {user.StudentNumber}</p>
         <p>{user.Faculty}</p>
       </div>

       {props.type === "student" ? (
         <Link to="#">Зареєструватись як мешканець гуртожитку</Link>
       ) : null}

       {props.type === "dweller" ? (
         <>
           <div className="cabinet-dweller-info">
             <p>Перепустка № 238912</p>
             <p>Кімната № 304</p>
           </div>
           <div className="cabinet-dweller-balance">
                <h4>{date}</h4>
                <div className="cabinet-dweller-balance-left"><span>Залишок грошей на рахунку:</span> <h3>356 грн.</h3></div>
           </div>

           <Table data={data} columns={columns}/>
         </>
       ) : null}
     </div>
   </>
 );
};

export default Cabinet;