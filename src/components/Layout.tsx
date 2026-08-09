import Header from "@/components/Header.tsx";
import Footer from "@/components/Footer.tsx";
import Menu from "@/components/Menu.tsx";
import {Outlet} from "react-router";

const Layout = () => {
    return (
        <>
            <Header/>
            <Menu/>
            <Outlet/>
            <Footer/>
        </>)
}
export default Layout