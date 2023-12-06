import { useEffect, useState } from "react";
import { getResidentSchedule } from "../../api";
import { useSelector } from "react-redux";

const ResidentSchedule = () => {
  const auth = useSelector(state => state.auth.value)
  const [controlDates, setControlDates] = useState([]);

  useEffect(()=> {

    const fetchData = async () => {
      try{
          const dates = [];
          const schedule = await getResidentSchedule(auth.token);
          console.log(schedule)
          schedule.forEach(scheduleItem => {
            dates.push(new Date(scheduleItem.date).toLocaleDateString("en-GB"))
          })
          setControlDates(dates);
      }catch(err){
          //redirect to 505? 
      }
  }

  fetchData();

  }, [])



  return (
    <div className="schedule">
      <h3>Розклад перевірок на 2023 рік</h3>
      <ul className="schedule-list">
        {controlDates.length > 0 && controlDates.map((date, index) => <li key={index}><h6>{index+1}.</h6> {date}</li>)}
      </ul>
    </div>
  );
};

export default ResidentSchedule;
