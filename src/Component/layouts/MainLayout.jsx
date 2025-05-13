import { Outlet } from "react-router";
import NavBar from "../NavBar/NavBar";
import Footer from "../pages/Footer";


const MainLayout = () => {
    return (
        <div className="bg-white" >
        <NavBar/>
        <Outlet/>
        <Footer/>
            
        </div>
    );
};

export default MainLayout;