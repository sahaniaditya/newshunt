import React,{useRef, useState} from 'react';

import { Outlet, Link } from "react-router-dom";
import "./Navbar.css";
function Navbar(){
    // const navCont = useRef();
    const [toggle,setToggle] = useState(1);
    const navSect = useRef();
    const handleClick = () =>{
        
       
       if(toggle === 1)
       navSect.current.style.display = "flex";
       else
       navSect.current.style.display = "none";
       setToggle((toggle === 0)  ? 1 : 0);
       
    }
    return (
        <>
        <div className='navbar-container'>
           <div className="nav-left-section">
            <div className='nav-header'>NewsHunt</div> 
            <div className='nav-menu-icon'><i onClick={handleClick} className="fa-solid fa-bars"></i></div>
           </div> 

            <div ref={navSect} className="nav-right-section">
            <div className='nav nav-general'><Link  style={{color : "grey",textDecoration : "none"}} to="/">General</Link></div>
            <div className='nav nav-sports'><Link style={{color : "grey",textDecoration : "none"}} to="/sports">Sports</Link></div>
            <div className='nav nav-entertainment'><Link style={{color : "grey",textDecoration : "none"}} to="/entertainment">Entertainment</Link></div>
            <div className='nav nav-business'><Link style={{color : "grey",textDecoration : "none"}} to="/business">Business</Link></div>
            <div className='nav nav-science'><Link style={{color : "grey",textDecoration : "none"}} to="/science">Science</Link></div>
            <div className='nav nav-health'><Link style={{color : "grey",textDecoration : "none"}} to="/health">Health</Link></div>
            <div className='nav nav-technology'><Link style={{color : "grey",textDecoration : "none"}} to="/technology">Technology</Link></div>

            </div>
            
          
        </div>
        <Outlet/>
        </>
    )
}
export default Navbar;