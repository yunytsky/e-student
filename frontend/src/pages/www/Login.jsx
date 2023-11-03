import Header from "../../components/www/Header";
import LoginForm from "../../components/forms/LoginForm";
import Footer from "../../components/www/Footer";

const Login = () => {
    return(
        <>
            <Header/>
            <div className="content">
                <LoginForm/>
            </div>
            <Footer/>
        </>
    );
};

export default Login;