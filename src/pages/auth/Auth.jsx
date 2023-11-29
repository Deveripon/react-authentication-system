import Banner from "../../assets/img/undraw_login_re_4vu2.svg";
import RegistrationForm from "../../components/Form/RegistrationForm";
const Auth = () => {
    return (
        <section className="  auth min-h-[calc(100vh_-130px)] bg-gray-300">
            <div className="  auth-page-container md:gap-32 md:py-16 py-16 flex justify-center items-center">
                <div className="hidden left-banner  md:flex justify-center items-center">
                    <img className="w-96" src={Banner} alt="login-banner" />
                </div>
                <div className="right-form  px-5 py-5">
                    <div className="registration-form">
                        <h2 className="text-teal-500 text-2xl font-heading font-semibold">
                            Registration
                        </h2>
                        <p className="text-gray-500 text-[12px]">
                            already have an Account?
                            <a className="text-teal-500 text-[16px] mx-2 hover:underline" href="#">
                                Sign In
                            </a>
                        </p>
                        <RegistrationForm />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Auth;
