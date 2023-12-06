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
    ["Троценко Я. П.", "yaroslav.p.trotsenko@gmail.com"],
    ["Карнаух Т. О.", "tkarnaukh@knu.ua"],
    ["Єфремов М. С.", "yefremov@knu.ua"],
    ["Андрійчук Т. О.","tetiana.andriichuk@knu.ua"],
    ["Молодцов О. І.","karateodoria@gmail.com"],
    ["Шакотько Т. О.","tetiana.shakotko@knu.ua"],
    ["Федоренко О. О.","oo.fedorenko@knu.ua"]
  ];

  return (
    <div className="teachers-info">
      <Table columns={columns} data={data} />
    </div>
  );
};

export default TeachersInfo;
