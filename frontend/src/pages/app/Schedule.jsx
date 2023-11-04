import { useState } from "react";
import LessonsSchedule from "../../components/app/LessonsSchedule";
import ExamSchedule from "../../components/app/ExamSchedule";
import TeachersInfo from "../../components/app/TeachersInfo";

const Schedule = () => {
    const [tab, setTab] = useState("lessons-schedule");

    const switchTab = (e) => {
        setTab(e.target.id);
    }

    return (
      <div className="schedule">
        {/* ADD CURRENT DATE LATER */}
        <h3>12/10/2023 Непарний тиждень</h3>
        <select name="group" id="group">
          <option value="K24">К24</option>
          <option value="K25">К25</option>
          <option value="K26">К26</option>
        </select>
        <div className="schedule-tabs">
          <button onClick={(e) => switchTab(e)} id="lessons-schedule">Розклад занять</button>
          <button onClick={(e) => switchTab(e)} id="exam-schedule">Розклад іспитів</button>
          <button onClick={(e) => switchTab(e)} id="teachers-info">Контакти викладачів</button>
        </div>

        {tab && tab == "lessons-schedule" ? (
          <LessonsSchedule />
        ) : tab == "exam-schedule" ? (
          <ExamSchedule />
        ) : tab == "teachers-info" ? (
            <TeachersInfo/>
        ) : null}

      </div>
    );
}

export default Schedule;