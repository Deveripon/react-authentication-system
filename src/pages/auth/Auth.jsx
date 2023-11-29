import Banner from "../../assets/img/undraw_login_re_4vu2.svg";
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
                        <form action="" className="reg-from mt-7 py-5">
                            <div className="form-group mb-2 flex gap-3 justify-center items-center">
                                <label className="form-label w-16 text-sm" htmlFor="name">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    className="form-control text-sm  -none outline-none px-4 py-2 rounded text-teal-500"
                                    id="name"
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div className="form-group mb-2 flex gap-3 justify-center items-center">
                                <label className="w-16 form-label text-sm" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    type="text"
                                    className="form-control text-sm  -none outline-none px-4 py-2 rounded text-teal-500"
                                    id="email"
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div className="form-group mb-2 flex gap-3 justify-center items-center">
                                <label className="w-16 form-label text-sm" htmlFor="cell">
                                    Cell
                                </label>
                                <input
                                    type="text"
                                    className="form-control text-sm  -none outline-none px-4 py-2 rounded text-teal-500"
                                    id="cell"
                                    placeholder="Enter your cell"
                                />
                            </div>
                            <div className="form-group mb-2 flex gap-3 justify-center items-center">
                                <label className="w-16 form-label text-sm" htmlFor="password">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    className="form-control text-sm  -none outline-none px-4 py-2 rounded text-teal-500"
                                    id="email"
                                    placeholder="Enter your Password"
                                />
                            </div>
                            <div className="form-group mb-2 flex gap-3 justify-center items-center">
                                <label className="w-16 form-label text-sm" htmlFor="password">
                                    Gender
                                </label>
                                <div className="gender-group ml-3">
                                    <label className="px-3" htmlFor="male">
                                        <input
                                            className="ml-4"
                                            type="radio"
                                            name="gender"
                                            id="male"
                                            value="male"
                                        />
                                        Male
                                    </label>
                                    <label className="px-3" htmlFor="female">
                                        <input
                                            className="ml-4"
                                            type="radio"
                                            name="gender"
                                            id="female"
                                            value="female"
                                        />
                                        female
                                    </label>
                                </div>
                            </div>
                            <div className="form-group mb-2 flex gap-3 justify-center items-center">
                                <label className="w-16 form-label text-sm" htmlFor="location">
                                    Location
                                </label>
                                <select
                                    className="form-control text-sm  -none outline-none px-6 py-2 rounded text-teal-500"
                                    name="location"
                                    id="location">
                                    <option value="">Select Your Location</option>
                                    <option value="Dhaka">Dhaka</option>
                                    <option value="Sylet">Sylet</option>
                                    <option value="Chitagong">Chitagong</option>
                                    <option value="Barishal">Barishal</option>
                                </select>
                            </div>
                            <button
                                className="bg-teal-500 rounded text-white transform duration-200 hover:bg-teal-700 py-2 w-full"
                                type="submit">
                                Signup
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Auth;
