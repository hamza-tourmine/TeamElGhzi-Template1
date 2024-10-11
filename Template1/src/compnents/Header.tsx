import React from "react";
import '../style/header.css';
import logo from '../../public/images/Logo.png'
export default  function Header(){
    return <div className="HeaderContainer">
        <div>
            <img className="logoHeader" src={logo} alt="" />
        </div>
            <ul className="Header_items">
                <li className="Home active">Home</li>
                <li className="Project">Project</li>
                <li className="About">About us</li>
                <li className="Contact">Contact us</li>
            </ul>
    </div>
}