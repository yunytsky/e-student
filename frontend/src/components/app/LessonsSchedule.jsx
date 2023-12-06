import Table from "./Table";
import { getLessonsSchedule } from "../../api";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const LessonsSchedule = () => {
  const auth = useSelector((state) => state.auth.value);
  
  const columns = [
    {
      name: "Час/день",
    },
    {
      name: "Пн",
      options: {
        customBodyRender: (value) => {
          let firstClass;
          let secondClass;

          if (value.length > 1) {
            firstClass = value[0];
            secondClass = value[1];
          }

          return (
            <div>
              <div>{firstClass !== undefined ? firstClass : value}</div>
              {secondClass !== undefined ? <br/> : ""}
              <div>{secondClass !== undefined ?  secondClass : ""}</div>
            </div>
          );
        },
      },
    },
    {
      name: "Вт",
      options: {
        customBodyRender: (value) => {
          let firstClass;
          let secondClass;

          if (value.length > 1) {
            firstClass = value[0];
            secondClass = value[1];
          }

          return (
            <div>
              <div>{firstClass !== undefined ? firstClass : value}</div>
              {secondClass !== undefined ? <br/> : ""}
              <div>{secondClass !== undefined ?  secondClass : ""}</div>
            </div>
          );
        },
      },
    },
    {
      name: "Ср",
      options: {
        customBodyRender: (value) => {
          let firstClass;
          let secondClass;

          if (value.length > 1) {
            firstClass = value[0];
            secondClass = value[1];
          }

          return (
            <div>
              <div>{firstClass ? firstClass : value}</div>
              {secondClass !== undefined ? <br/> : ""}
              <div>{secondClass ? secondClass : ""}</div>
            </div>
          );
        },
      },
    },
    {
      name: "Чт",
      options: {
        customBodyRender: (value) => {
          let firstClass;
          let secondClass;

          if (value.length > 1) {
            firstClass = value[0];
            secondClass = value[1];
          }

          return (
            <div>
              <div>{firstClass ? firstClass : value}</div>
              {secondClass !== undefined ? <br/> : ""}
              <div>{secondClass ? secondClass : ""}</div>
            </div>
          );
        },
      },
    },
    {
      name: "Пт",
      options: {
        customBodyRender: (value) => {
          let firstClass;
          let secondClass;

          if (value.length > 1) {
            firstClass = value[0];
            secondClass = value[1];
          }

          return (
            <div>
              <div>{firstClass ? firstClass : value}</div>
              {secondClass !== undefined ? <br/> : ""}
              <div>{secondClass ? secondClass : ""}</div>
            </div>
          );
        },
      },
    },
  ];

  //Handle creating a complex two-parted cell
  const [data, setData] = useState([]);
  
  useEffect(() => {

    const fetchData = async () => {

      try {
        const days = [
          ["1 пара 08:40-10:15"],
          ["2 пара 10:35-12:10",],
          ["3 пара 12:20-13:55"],
          ["4 пара 14:05-15:40"],
        ];
        const scheduleList = await getLessonsSchedule(auth.token);
        
        scheduleList.forEach((scheduleItem) => {
          if (scheduleItem.group === auth.user.group) {
            scheduleItem.days.forEach((day) => {
              day.forEach((subject,index) => {
                 days[index].push(subject)
              })
            });
          }
        });
        
        setData(days);
        console.log(data)

      } catch (err) {
        console.log(err)
        //redirect to 505?
      }
    };

    fetchData();
  }, []);

  return (
    <div className="lessons-schedule">
      <Table columns={columns} data={data} />
    </div>
  );
};

export default LessonsSchedule;
