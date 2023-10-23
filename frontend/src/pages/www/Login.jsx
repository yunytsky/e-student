import Header from "../../components/Header";

const Login = () => {
    return(
        <>
            <Header/>
            <div className="content">
                <form className="login-form">
                    <h3>Вхід</h3>
                    <label htmlFor="student-card-number">
                        <h6>Номер студентського квитка</h6>
                    </label>
                    <input type="text" placeholder="AA 00 00 00 00 00"/>

                    <label htmlFor="student-card-number">
                        <h6>Номер студентського квитка</h6>
                    </label>
                    <input type="password"/>
                    <Link to="#">Забули пароль?</Link>

                    <button className="login-form-button button-filled">
                        Увійти
                    </button>

                    <span className="login-form-signup-link">
                        Немає акаунту? <Link to="#">Зареєструватися</Link>
                    </span>
                </form>
            </div>
            <Footer/>
        </>
    );
};

export default Login;