import Table from "./Table";

const TeachersInfo = () => {
  const columns = [
    {
      name: "Викладач",
    },
    {
      name: "Пошта",
    },
  ];

  const data = [
    ["Омельчук Л. Л.", "omelchuk.l.l.@knu.ua"],
    ["Терещенко Я. П.", "tereshcherenko.y.p.@gmail.com"],
    ["Шишацький А. Л.", "omshishackyi.a@gmail.com"],
  ];

  return (
    <div className="teachers-info">
      <Table columns={columns} data={data} />
    </div>
  );
};

export default TeachersInfo;
