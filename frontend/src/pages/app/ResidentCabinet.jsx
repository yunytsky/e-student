import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Table from "../../components/app/Table";
import { useSelector } from "react-redux";

const ResidentCabinet = () => {
  const resident = useSelector((state) => state.auth.value.user_resident);
  const [date, setDate] = useState("");
  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    //Date
    const today = new Date();

    const day = today.getDate();
    const month = today.getMonth();
    const year = today.getFullYear();

    const date = String(day) + "/" + String(month + 1) + "/" + String(year);

    setDate(date);
    //Table
    const tableData = [];
    if(resident){
      for (let i = resident.accountTransactions.length - 1; i >= 0; i--) {
        const transaction = resident.accountTransactions[i];
        tableData.push([new Date(transaction.date).toLocaleDateString('en-GB'), transaction.amount, transaction.remains]);
    }
    
    }

    setData(tableData);

    setColumns([
      { 
        name: "Дата",
      },
      {
        name: "Сума",
      },
      {
        name: "Залишок",
      },
    ]);
  }, [date, resident]);

  return (
    <>
      <div className="cabinet">
        <h3>{resident && resident.fullName}</h3>
        <div className="cabinet-resident-info">
          <p>Перепустка № {resident && resident.passNumber}</p>
          <p>Кімната № {resident&& resident.room}</p>
          <p>Гуртожиток №{resident && resident.dormNumber}, {resident&& resident.dormAddress}</p>
 
        </div>
        <div className="cabinet-resident-balance">
          <h4>{date}</h4>
          <div className="cabinet-resident-balance-left">
            <span>Залишок грошей на рахунку:</span> <h3>{resident && resident.balance} грн.</h3>
          </div>
        </div>

        <Table data={data} columns={columns} />
      </div>
    </>
  );
};

export default ResidentCabinet;
