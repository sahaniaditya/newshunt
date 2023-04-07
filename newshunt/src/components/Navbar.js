import React,{useRef, useState,useEffect} from 'react';

import { Outlet, Link,useLocation } from "react-router-dom";
import "./Navbar.css";
function Navbar(){
    let location = useLocation();
     const [width,setWidth] = useState(window.innerWidth);
    // const navCont = useRef();
    const [active,setActive] = useState(1);
    const [toggle,setToggle] = useState(1);
    useEffect(()=>{
        if(location.pathname === "/")
         setActive(1);
        else if(location.pathname === "/sports") 
         setActive(2);
        else if(location.pathname === "/entertainment") 
         setActive(3);
        else if(location.pathname === "/business") 
         setActive(4);
        else if(location.pathname === "/science") 
         setActive(5);
        else if(location.pathname === "/health") 
         setActive(6);
         else
          setActive(7);

    },[location]);
    const navSect = useRef();
    const handleClick = () =>{
        
       
       if(toggle === 1)
       navSect.current.style.display = "flex";
       else
       navSect.current.style.display = "none";
       setToggle((toggle === 0)  ? 1 : 0);
       
    }
    setInterval(()=>{
        setWidth(window.innerWidth);
    },100);
    return (
        <>
        <div className='navbar-container'>
           <div className="nav-left-section">
            <div className='nav-header'>NewsHunt</div> 
            <div className='nav-menu-icon'><i onClick={handleClick} className="fa-solid fa-bars"></i></div>
           </div> 

            <div ref={navSect} style={(width > 1100) ? {display : "flex"} : {display : "none"}} className="nav-right-section">
            <div className='nav nav-general'><Link  style={(active === 1) ? {color : "lightgrey",textDecoration : "none"} : {color : "grey",textDecoration : "none"}} to="/">General</Link></div>
            <div className='nav nav-sports'><Link style={(active === 2) ? {color : "lightgrey",textDecoration : "none"} : {color : "grey",textDecoration : "none"}} to="/sports">Sports</Link></div>
            <div className='nav nav-entertainment'><Link style={(active === 3) ? {color : "lightgrey",textDecoration : "none"} : {color : "grey",textDecoration : "none"}} to="/entertainment">Entertainment</Link></div>
            <div className='nav nav-business'><Link style={(active === 4) ? {color : "lightgrey",textDecoration : "none"} : {color : "grey",textDecoration : "none"}} to="/business">Business</Link></div>
            <div className='nav nav-science'><Link style={(active === 5) ? {color : "lightgrey",textDecoration : "none"} : {color : "grey",textDecoration : "none"}} to="/science">Science</Link></div>
            <div className='nav nav-health'><Link style={(active === 6) ? {color : "lightgrey",textDecoration : "none"} : {color : "grey",textDecoration : "none"}} to="/health">Health</Link></div>
            <div className='nav nav-technology'><Link style={(active === 7) ? {color : "lightgrey",textDecoration : "none"} : {color : "grey",textDecoration : "none"}} to="/technology">Technology</Link></div>

            </div>
            
          
        </div>
        <Outlet/>
        </>
    )
}
export default Navbar;