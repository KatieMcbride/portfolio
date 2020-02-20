import React from "react";
import "./style.css";
import Overlay from "../Overlay/Overlay"

// function NavBar() {
//   return (
    // <>  
    //     <nav>
    //     <p>Katie McBride</p>
    //     <span style={{cursor:'pointer'}} className="nav-link" onclick="openNav()">About Me</span>
    //     </nav>

    //     <div id="myNav" className="overlay">
    //         <a href="javascript:void(0)" className="closebtn" onclick="closeNav()">&times;</a>
    //         <div className="overlay-content">
    //             <h1 className="aboutMe">ABOUT ME</h1>
    //             <p className="aboutMeI">Creative Web Developer with a natural aptitude for programming, design, and computational thinking. Graduate from Northwestern University’s full-stack Web Development Bootcamp. Worked with front end UX design as well as back end development and database storage. </p>
    //         </div>
    //     </div>
    // </>  
    
  class NavBar extends React.Component {
      render() {
        return (
          <nav>
        <p>Katie McBride</p>
        <span style={{cursor:'pointer'}} className="nav-link" onclick="openNav()">About Me</span>
        < Overlay />
        </nav>
        )
      }
}


export default NavBar;