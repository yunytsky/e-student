
const ChangePassword = () => {
    const auth = useSelector(state => state.auth.value);
    const [date, setDate] = useState("");
    const [data, setData] = useState([]);
    const [columns, setColumns] = useState([]);

 return (
   <>
     <div className="change-password">
       <h3>Оновити пароль</h3>
       {/* //changepasswordform */}
     </div>
   </>
 );
};

export default ChangePassword;