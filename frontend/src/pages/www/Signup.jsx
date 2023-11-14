import Header from "../../components/www/Header";
import SignupForm from "../../components/forms/SignupForm";
import Footer from "../../components/www/Footer";
const Signup = () => {
    return(
        <>
            <Header type="auth"/>
            <div className="content">
                <SignupForm/>
            </div>
            <Footer/>
        </>
    );
};

export default Signup;