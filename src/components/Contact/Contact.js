import React from "react";
import "./style.css";


class Contact extends React.Component {
    render() {
      return (
        <div>
        <div className="contact">
            <p className= "nav-link contact"><i className="fab fa-linkedin"></i><a href="https://www.linkedin.com/in/katiebmcbride/">  LinkedIn</a></p>
            <p className="nav-link contact"><i className="fab fa-github"></i><a href="https://github.com/KatieMcbride">  Github</a></p>
            <p className="nav-link contact"><i className="fas fa-mail-bulk"></i><a href="mailto:mcbride.katieb@gmail.com? subject=Let's Chat">  mcbride.katieb@gmail.com</a></p>
            
        </div>
        <div className="contact">
          <p className="nav-link contact-2"><i className="fas fa-file"></i><a href="./PENNRESUME .pdf">  Resume</a></p>
          {/* <p className="nav-link contact-2"><i className="fas fa-file"></i><a href="../../Pages/Links.js">  Links I like</a></p> */}
        </div>
        </div>
       
      )
    }
};


export default Contact;