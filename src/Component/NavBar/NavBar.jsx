import { useState } from "react";
import logo from "./../../assets/logo.png";
import DynamicLink from "./DynamicLink";
import { Menu, X } from "lucide-react";
import { navigationData } from "./navigationData";
import { Link } from "react-router";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = navigationData.map((route) => (
    <DynamicLink key={route.id} route={route} />
  ));

  return (
    <div className="bg-white text-black ">
      <nav className="container mx-auto flex flex-row flex-wrap justify-between  md:gap-10 md:p-10 py-3">
        <div
          className="relative flex gap-2 items-center "
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <X className="lg:hidden" />
          ) : (
            <Menu className="lg:hidden" size={40} />
          )}
          <ul
            className={`lg:hidden absolute 
                     ${
                       menuOpen ? "top-10 left-0 " : "-top-50 mt-0"
                     } bg-white text-black font-semibold `}
          >
            {links}
          </ul>

          <Link  to="/"
            className="flex items-center justify-center gap-2 md:gap-3"
          >
            <img
              src={logo}
              alt="Law-Logo"
              className="w-[30px] md:w-[50px] lg:w-full lg:h-full"
            />
            <h3 className="font-bold text-xl md:text-3xl text-black">Law.BD</h3>
          </Link>
        </div>

        <ul className="hidden lg:flex text-xl items-center ">{links}</ul>
        <button className="btn border border-none bg-[#0EA106] text-white text-sm md:text-xl py-2 px-3 md:px-7 rounded-full md:py-7">
          Contact Now
        </button>
      </nav>
    </div>
  );
};

export default NavBar;
