import { useEffect, useState } from "react";
import Table from "./Table";
import { getExamsSchedule } from "../../api";
import { useSelector } from "react-redux";

const ExamSchedule = () => {
  const auth = useSelector((state) => state.auth.value);

  const columns = [
    {
      name: "Назва предмету",
    },
    {
      name: "Тип контролю",
    },
    {
      name: "Дата",
    },
    {
      name: "Час",
    },
    {
      name: "Авдиторія",
    },
  ];

  // const data = [
  //   ['Дискретна математика', 'Залік', '10/12/2023', "09:30", 206],
  //   ['Додаткові розділи C++', 'Залік', '12/12/2023', "08:30", 204],
  //   ["Об'єктно орієнтоване програмування", 'Екзамен', '14/12/2023', "09:30", 106],
  //   ['Англійська мова', 'Залік', '15/12/2023', "09:30", 206],
  //   ['Теорія ймовірностей', 'Екзамен', '18/12/2023', "10:30", 208],
  // ];
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const scheduleList = await getExamsSchedule(auth.token);
        const exams = [];
        console.log(scheduleList)
        scheduleList.forEach((scheduleItem) => {
          if (scheduleItem.group === auth.user.group) {
            scheduleItem.exams.forEach((exam) => {
              exams.push([
                exam.subject,
                exam.control,
                new Date(exam.dateTime),
                exam.room,
              ]);
            });
          }
        });
        
        // Sort exams array by date and time
        exams.sort((a, b) => a[2] - b[2]);
        
        // Convert dates to formatted strings after sorting
        const sortedExams = exams.map((exam) => [
          exam[0],
          exam[1],
          exam[2].toLocaleDateString("en-GB"),
          exam[2].toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
          }),
          exam[3],
        ]);

        setData(sortedExams);


      } catch (err) {
        //redirect to 505?
      }
    };

    fetchData();
  }, []);

  return (
    <div className="exam-schedule">
      <Table columns={columns} data={data} />
    </div>
  );
};

export default ExamSchedule;
