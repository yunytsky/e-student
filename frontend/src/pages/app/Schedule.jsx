import { useEffect, useState } from "react";
import LessonsSchedule from "../../components/app/LessonsSchedule";
import ExamSchedule from "../../components/app/ExamSchedule";
import TeachersInfo from "../../components/app/TeachersInfo";

const Schedule = () => {
    const [tab, setTab] = useState("lessons-schedule");
    const [date, setDate] = useState("");
    const [week, setWeek] = useState("");

    function daysBetweenDates(date1, date2) {                                                                                                  
        // Convert both dates to milliseconds
        const date1Millis = date1.getTime();
        const date2Millis = date2.getTime();
    
        // Calculate the difference in milliseconds
        const differenceMillis = Math.abs(date2Millis - date1Millis);
    
        // Convert the difference back to days
        const millisecondsInDay = 1000 * 60 * 60 * 24;
        const daysDifference = Math.floor(differenceMillis / millisecondsInDay);
    
        return daysDifference;
    }
    

    useEffect(() => {
        //Date
        const today = new Date();

        const day = today.getDate();
        const month = today.getMonth();
        const year = today.getFullYear();

        const date = String(day) + "/" + String(month + 1) + "/" + String(year);

        //Check if the week is odd or even
        const startDate = new Date(year, 8, 1);
        let startDateDay = startDate.getDay(); // Day of the week for September 1st (0=Sun, 1=Mon, ..., 6=Sat)

        //Change Sunday index
        if(startDateDay === 0){
          startDateDay = 7;
        }

        const daysUntilNextMonday = 7 - startDateDay;
        const daysBetween = daysBetweenDates(today, startDate);

        if (daysBetween <= daysUntilNextMonday) {
          setWeek("odd");
        }else if((daysBetween-daysUntilNextMonday-1) < 7){
          setWeek("even");
        } else if (
          Math.floor((daysBetween - daysUntilNextMonday - 1) / 7) % 2 !==
          0
        ) {
          setWeek("odd");
        } else {
          setWeek("even");
        }

        setDate(date);

    },[date])

    const switchTab = (e) => {
        setTab(e.target.id);
    };

    return (
      <div className="schedule">
        {/* ADD CURRENT DATE LATER */}
        <h3>
          {" "}
          {week === "odd"
            ? date + " Непарний тиждень"
            : week === "even"
            ? date + " Парний тиждень"
            : ""}
        </h3>

        <div className="schedule-inputs">
          <select className="schedule-select" name="group" id="group">
            <option value="K24">К24</option>
            <option value="K25">К25</option>
            <option value="K26">К26</option>
          </select>
        </div>

        <div className="schedule-tabs">
          <button
            onClick={(e) => switchTab(e)}
            id="lessons-schedule"
            className={
              tab === "lessons-schedule"
                ? "schedule-tab active"
                : "schedule-tab"
            }
          >
            Розклад занять
          </button>
          <button
            onClick={(e) => switchTab(e)}
            id="exam-schedule"
            className={
              tab === "exam-schedule"
                ? "schedule-tab active"
                : "schedule-tab"
            }
          >
            Розклад іспитів
          </button>
          <button
            onClick={(e) => switchTab(e)}
            id="teachers-info"
            className={
              tab === "teachers-info"
                ? "schedule-tab active"
                : "schedule-tab"
            }
          >
            Контакти викладачів
          </button>
        </div>

        {tab && tab == "lessons-schedule" ? (
          <LessonsSchedule />
        ) : tab == "exam-schedule" ? (
          <ExamSchedule />
        ) : tab == "teachers-info" ? (
          <TeachersInfo />
        ) : null}
      </div>
    );
}

export default Schedule;