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
                    <li><NavLink to='https://github.com/Kalebsdavis'>Github</NavLink></li>
                    <li><NavLink to='https://www.linkedin.com/in/kaleb-davis-77037b336'>LinkedIn</NavLink></li>
                    <li><NavLink>801-680-8324</NavLink></li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar