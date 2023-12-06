import { useEffect, useState } from "react";
import Calendar from "react-calendar";
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
            dates.push(new Date(scheduleItem.date))
          })
          setControlDates(dates);
      }catch(err){
          //redirect to 505? 
      }
  }

  fetchData();

  }, [])



  const tileClassName = ({ date, view }) => {
    // Check if the date is in the list of highlighted dates
    if (view === 'month' && controlDates.some((controlDate) => date.toDateString() === controlDate.toDateString())) {
      return 'react-calendar__tile--control';
    }
    return null;
  };

  return (
    <div className="schedule">
      <h3>Розклад перевірок на 2023 рік</h3>
      <Calendar tileClassName={tileClassName}/>
    </div>
  );
};

export default ResidentSchedule;
