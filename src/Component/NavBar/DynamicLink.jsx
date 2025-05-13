import { NavLink } from "react-router";

const DynamicLink = ({ route }) => {
    return (
        <div>
            <li className='px-3 p-2 text-black'>
                <NavLink to={route.path}
                    className={({ isActive }) =>
                        `block px-2 py-1 rounded hover:bg-gray-200 ${isActive ? "underline font-semibold" : ""
                        }`
                    }
                >{route.name}</NavLink>
            </li>

        </div>
    );
};

export default DynamicLink;