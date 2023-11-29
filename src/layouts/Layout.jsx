import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import PageInfo from "../components/pageHelmet/PageInfo";
const Layout = () => {
    return (
        <>
            <PageInfo title="Home" />
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};

export default Layout;
