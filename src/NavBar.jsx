import { NavLink } from "react-router-dom"
import './App.css'
import { FaHome } from "react-icons/fa";
import LandingPage from "./LandingPage";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPhoneSquareAlt } from "react-icons/fa";

const NavBar = () =>{


    return (
        <div className="NavBar">
            <div className="Logo">
                <NavLink to='/'>
                <FaHome color='white' size={25}/>
                </NavLink>
                </div>
            {/* <div className='header'><NavLink to='https://www.linkedin.com/in/kaleb-davis-77037b336'><h1>Kaleb Davis</h1></NavLink></div>     */}
            <div className="links">
                <ul className="github-links">
                    <li><NavLink to='https://github.com/Kalebsdavis'><FaGithub size={20}/> Github</NavLink></li>
                    <li><NavLink to='https://www.linkedin.com/in/kaleb-davis-77037b336'><FaLinkedin size={20}/>LinkedIn</NavLink></li>
                    <li><NavLink><FaPhoneSquareAlt size={20}/>801-680-8324</NavLink></li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar