import Table from "./Table";

const LessonsSchedule = () => {
    const columns = [
      {
        name: "Час/день",
      },
      {
        name: "Пн",
  
      },
      {
        name: "Вт",
      },
      {
        name: "Ср",
      },
      {
        name: "Чт",
      },
      {
        name: "Пт",
      },
    ];
    

    //Handle creating a complex two-parted cell
      const data = [
        ["1 пара 08:40-10:15", ["Предмет 1 (лек.) ", "Предмет 1/2 (лек.)"], "", "Предмет 1 (лаб.)", "Предмет 1 (лек.)", "Предмет 1 (лек.)"],
        ["2 пара 08:40-10:15", "", "Предмет 2 (лаб.)", "Предмет 2 (лек.)", "Предмет 2 (лек.)", "Предмет 2 (лек.)"],
        ["3 пара 08:40-10:15", "Предмет 3 (лек.)", "Предмет 3 (лаб.)", "", "Предмет 3 (лек.)", "Предмет 3 (лаб.)"],
        ["4 пара 08:40-10:15", "Предмет 4 (лек.)", "Предмет 4 (лаб.)", "Предмет 4 (лек.)", "Предмет 4 (лек.)", "Предмет 4 (лаб.)"],
      ];

    return(
        <div className="lessons-schedule">
            <Table columns={columns} data={data} />
        </div>
    );
};

export default LessonsSchedule;