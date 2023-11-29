import { Link } from "react-router-dom";
import logo from "../../assets/img/colored-pencils.png";
import { useLocation } from "react-router-dom";
import isActiveRoute from "../../utilities/pathFinder";
const Header = () => {
    const location = useLocation();

    return (
        <>
            <section className="header bg-gray-200">
                <div className="header-container px-10 py-4 md:px-32  flex justify-between items-center">
                    <div className="brand">
                        <Link to="/">
                            <img className="w-full" src={logo} alt="brand-logo" />
                        </Link>
                    </div>
                    <div className="menu text-green-500 font-heading">
                        <ul className="flex gap-4 md:gap-6">
                            <li>
                                <Link
                                    className={`${
                                        location.pathname === "/" ? "active" : ""
                                    } transform duration-150 hover:text-purple-500`}
                                    to="/">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className={`${
                                        isActiveRoute(location.pathname, "/about") ? "active" : ""
                                    } transform duration-150 hover:text-purple-500`}
                                    to="/about">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className={`${
                                        isActiveRoute(location.pathname, "/contact") ? "active" : ""
                                    } transform duration-150 hover:text-purple-500`}
                                    to="/contact">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className={`${
                                        isActiveRoute(location.pathname, "/blog") ? "active" : ""
                                    } transform duration-150 hover:text-purple-500`}
                                    to="/blog">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className={`${
                                        isActiveRoute(location.pathname, "/auth") ? "active" : ""
                                    } auth transform duration-150 bg-green-500 rounded-full text-white py-2 px-5 hover:ring-2 ring-offset-2 ring-green-500`}
                                    to="/auth">
                                    Registration
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Header;
