import { useState } from "react";
import { useSelector } from "react-redux";

const StudentCabinet = () => {
    const auth = useSelector(state => state.auth.value);
    const [date, setDate] = useState("");
    const [data, setData] = useState([]);
    const [columns, setColumns] = useState([]);

 return (
   <>
     <div className="cabinet">
       <h3>{auth.user.fullName}</h3>
       <div className="cabinet-student-info">
         <p>Студентський квиток: {auth.user.studentNumber}</p>
         <p>{auth.user.faculty}</p>
         <p>{auth.user.course} курс, {auth.user.group}</p>

       </div>
     </div>
   </>
 );
};

export default StudentCabinet;