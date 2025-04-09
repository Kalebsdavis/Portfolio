import './App.css'
import TrackMate from './TrackMate/TrackMate';
import RV from './RV/RV';
import BankApp from './BankApp/BankApp';
import { Link } from 'react-router-dom';
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { DiDjango } from "react-icons/di";
import { SiMongodb } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiSqlite } from "react-icons/si";

const LandingPage = () =>{
    
    return(
    <div className='landing-page-background'>
        <div  className='landing-page-container'>
           <div className='About-me' style={{ width:'100vw', marginLeft:'5rem'}}>
            <h2 style={{ fontWeight:'normal', fontSize:'40px',marginTop:'3rem', color:'white', textShadow:' 1px 1px 10px rgb(255, 255, 255)'}}>
                I'm Kaleb Davis,<br/>
                    A Full Stack Developer <span className='cursor'/>
                </h2>
            <p style={{marginTop:'1rem',  color:'white'}}>Austin, Texas</p>
            <p style={{marginTop:'1rem',  color:'white'}}><FaReact size={20}/>React.js  <FaNode size={20}/>Node.js  <SiNextdotjs size={20}/>Next.js   <DiDjango size={20}/>Django   
            <SiMongodb size={20}/>MongoDB   <GrMysql size={20} />MySQL  
            <BiLogoPostgresql size={20} />PostgreSQL    <SiSqlite size={20} />SQLite
            </p>
             <h2 style={{fontWeight:'normal', fontSize:'30px',marginTop:'3rem', color:'white', textShadow:' 1px 1px 10px rgb(255, 255, 255)'}}>Projects</h2>
           </div>
          
            <div className='card-container'>
            
            <div className='trackmate-card'><TrackMate/></div>
            <div className='trackmate-card'><RV/></div>
            <div className='trackmate-card'><BankApp/></div>
            </div>
        </div>
    </div>
    )
}

export default LandingPage;