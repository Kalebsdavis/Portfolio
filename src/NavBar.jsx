import { NavLink } from "react-router-dom"
import './App.css'
import { FaHome } from "react-icons/fa";
import LandingPage from "./LandingPage";

const NavBar = () =>{


    return (
        <div className="NavBar">
            <div className="Logo">
                <NavLink to='/'>
                <FaHome color='white' size={25}/>
                </NavLink>
                </div>
            <div className="links">
                
                <ul className="github-links">
                    <li><NavLink>Github link1</NavLink></li>
                    <li><NavLink>Github link2</NavLink></li>
                    <li><NavLink>Github link3</NavLink></li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar