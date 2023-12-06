import { useEffect } from "react";
import Calendar from "react-calendar";

const ResidentSchedule = () => {
// List of dates
  const controlDates = [
    new Date(2023, 3, 10), // 10.04.2023
    new Date(2023, 4, 10), // 10.05.2023
    new Date(2023, 5, 9),  // 09.06.2023
    new Date(2023, 6, 10), // 10.07.2023
    new Date(2023, 7, 10), // 10.08.2023
    new Date(2023, 8, 11), // 11.09.2023
    new Date(2023, 9, 10), // 10.10.2023
    new Date(2023, 10, 10),// 10.11.2023
    new Date(2023, 11, 11),// 11.12.2023
  ];

  useEffect(()=> {
    
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
