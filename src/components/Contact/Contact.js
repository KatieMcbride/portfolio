import React from "react";
import "./style.css";


class Contact extends React.Component {
    render() {
      return (
        <div class="contact">
            <p class= "nav-link contact"><i class="fab fa-linkedin"></i><a href="https://www.linkedin.com/in/katiebmcbride/">  LinkedIn</a></p>
            <p class="nav-link contact"><i class="fab fa-github"></i><a href="https://github.com/KatieMcbride">  Github</a></p>
            <p class="nav-link contact"><i class="fas fa-mail-bulk"></i><a href="mailto:mcbride.katieb@gmail.com? subject=Let's Chat">  mcbride.katieb@gmail.com</a></p>
        </div>
       
      )
    }
};


export default Contact;