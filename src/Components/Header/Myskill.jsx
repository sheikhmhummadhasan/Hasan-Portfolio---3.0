import React from 'react';
import { FaHtml5 } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";


const Myskill = () => {
    return (
        <div>
            <section className="my-skill">
                <div className="skil-1">
                    <div className="s-box-1">
                        <h3>SPECIALITY</h3>
                        <h2>My <span>speciality</span></h2>
                        <p>I am skilled in Keyword Recharge, Web Development, and Illustration Design
                            i create creative and effective solutions to bring ideas to life.</p>
                    </div>
                </div>
                <div className="skill-2">
                        <div className="card-skill-2">
                            <span><FaHtml5 id='s-logo'/></span>
                            <h2>HTML & HTML5</h2>
                            <p>I have strong knowledge of HTML and a solid understanding of creating well-structured and semantic web layouts.
                                I can build clean, responsive, and user-friendly webpage structures efficiently.</p>
                                <button className='skill-btn'>Discuss for Projects<FaArrowRightLong /> </button>
                        </div>
                        <div className="card-skill-2">
                            <span><IoLogoCss3 id='s-logo'/></span>
                            <h2>CSS & CSS3</h2>
                            <p>I have strong knowledge of HTML and a solid understanding of creating well-structured and semantic web layouts.
                                I can build clean, responsive, and user-friendly webpage structures efficiently.</p>
                                <button className='skill-btn'>Discuss for Projects<FaArrowRightLong /> </button>
                        </div>
                        <div className="card-skill-2">
                            <span><IoLogoJavascript id='s-logo' /></span>
                            <h2>Java Script</h2>
                            <p>I have strong knowledge of HTML and a solid understanding of creating well-structured and semantic web layouts.
                                I can build clean, responsive, and user-friendly webpage structures efficiently.</p>
                                <button className='skill-btn'>Discuss for Projects<FaArrowRightLong /> </button>
                        </div>
                        <div className="card-skill-2">
                            <span><SiMongodb  id='s-logo'/></span>
                            <h2>MongoDb</h2>
                            <p>I have strong knowledge of HTML and a solid understanding of creating well-structured and semantic web layouts.
                                I can build clean, responsive, and user-friendly webpage structures efficiently.</p>
                                <button className='skill-btn'>Discuss for Projects<FaArrowRightLong /> </button>
                        </div>
                        <div className="card-skill-2">
                            <span><FaReact id='s-logo'/></span>
                            <h2>Raact</h2>
                            <p>I have strong knowledge of HTML and a solid understanding of creating well-structured and semantic web layouts.
                                I can build clean, responsive, and user-friendly webpage structures efficiently.</p>
                                <button className='skill-btn'>Discuss for Projects<FaArrowRightLong /> </button>
                        </div>
                        <div className="card-skill-2">
                            <span><FaNodeJs id='s-logo'/></span>
                            <h2>Node Js</h2>
                            <p>I have strong knowledge of HTML and a solid understanding of creating well-structured and semantic web layouts.
                                I can build clean, responsive, and user-friendly webpage structures efficiently.</p>
                                <button className='skill-btn'>Discuss for Projects<FaArrowRightLong /> </button>
                        </div>
                </div>
            </section>
        </div>
    );
};

export default Myskill;