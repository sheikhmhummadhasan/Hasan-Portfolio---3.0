import React from 'react';
import { CiLinkedin } from "react-icons/ci";
import { AiOutlineFacebook } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";
import { BiCurrentLocation } from "react-icons/bi";
import { MdOutlineLocalPhone } from "react-icons/md";


const Footer = () => {
    return (
        <div>
            <footer>
                <div className="f1">
                    <h2 className='nav-box-1 fbox'><img src="src/assets/header-logo.png" alt="Logo" /> HasaN Portfolio</h2>
                    <p>Hi, this is Md Hasan Sheikh — a passionate and professional web developer. I specialize in creating modern, responsive, and user-friendly websites that deliver real results. Through this portfolio, you’ll discover my skills, creativity.</p>
                    <div className="icon-f">
                        <CiLinkedin id='fi' />
                        <AiOutlineFacebook id='fi'/>
                        <FaYoutube id='fi'/>
                        <SiFiverr id='fi'/>
                    </div>
                </div>
                <div className="f2">
                    <h2>Quick Links</h2>
                    <h4>Home</h4>
                    <h4>Service</h4>
                    <h4>Project</h4>
                    <h4>About</h4>
                    <h4>Clint</h4>
                    <h4>Contact</h4>
                </div>
                <div className="f3">
                    <h2>Importent</h2>
                    <h4>Career</h4>
                    <h4>Turm & condtion</h4>
                    <h4>Privacy Policy</h4>
                    <h4>Sochal Work</h4>
                </div>
                <div className="f4">
                    <h2>Contacts</h2>
                    <h4><MdOutlineLocalPhone id='fi'/>+8801612898695 / +8801818490608</h4>
                    <h4><SiMinutemailer id='fi'/>hasan2001onlin@gmail.com / hasanoffichal007@gmail.com</h4>
                    <h4><BiCurrentLocation id='fi'/>Kobirpur,Thumbulkhana-7801,Faridpur Sadar,Faridpur,Dahaka,Bangladesh</h4>
                </div>
            </footer>
        </div>
    );
};

export default Footer;