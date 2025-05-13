import { Outlet } from "react-router";
import NavBar from "../NavBar/NavBar";
import Footer from "../pages/Footer";
import { ToastContainer } from "react-toastify";


const MainLayout = () => {
    return (
        <div className="bg-white" >
        <NavBar/>
        <Outlet/>
        <ToastContainer/>
        <Footer/>
            
        </div>
    );
};

export default MainLayout;