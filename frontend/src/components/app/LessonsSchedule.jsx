import Table from "./Table";

const LessonsSchedule = () => {
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
                <div>{firstClass ? firstClass : value}</div>
                <div>{secondClass ? secondClass : ""}</div>
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
                <div>{secondClass !== undefined ? secondClass : ""}</div>
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
                <div>{secondClass ? secondClass : ""}</div>
              </div>
            );
          },
        },
      },
    ];
    

    //Handle creating a complex two-parted cell
      const data = [
        ["1 пара 08:40-10:15", ["Предмет 1 (лек.) неп"], ["", "Предмет 1 (лек.) парfdgdf"], ["Предмет 1 (лек.) неп", ""], [""], ["Предмет 1 (лек.) неп", "Предмет 1 (лек.) пар"],],
        ["2 пара 08:40-10:15", ["Предмет 1 (лек.) неп"], [""], ["Предмет 1 (лек.) неп", "Предмет 1 (лек.) пар"], ["", "Предмет 1 (лек.) пар"], ["Предмет 1 (лек.) пар"],],
        ["3 пара 08:40-10:15", ["Предмет 1 (лек.) неп", "Предмет 1 (лек.) пар"], ["Предмет 1 (лек.) пар", ""], ["", "Предмет 1 (лек.) пар"], ["Предмет 1 (лек.) неп", "Предмет 1 (лек.) пар"], ["Предмет 1 (лек.) неп", "Предмет 1 (лек.) пар"],],
        ["4 пара 08:40-10:15", ["Предмет 1 (лек.) неп"], [""], ["Предмет 1 (лек.) неп"], ["Предмет 1 (лек.) неп", "Предмет 1 (лек.) пар"], ["Предмет 1 (лек.) неп"],],
      ];

    return(
        <div className="lessons-schedule">
            <Table columns={columns} data={data} />
        </div>
    );
};

export default LessonsSchedule;