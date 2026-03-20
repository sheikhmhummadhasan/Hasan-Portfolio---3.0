import React from 'react';
import { FaHtml5 } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaFigma } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiGsap } from "react-icons/si";


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
                        <span><FaHtml5 id='s-logo' /></span>
                        <h2>HTML & HTML5</h2>
                        <p>I have strong knowledge of HTML and a solid understanding of creating well-structured and semantic web layouts.</p>
                        <a href="https://wa.me/8801612898695" target='_blank'><button className='skill-btn'>Discuss for Projects<FaArrowRightLong /> </button>
                        </a>
                    </div>
                    <div className="card-skill-2">
                        <span><IoLogoCss3 id='s-logo' /></span>
                        <h2>CSS & CSS3</h2>
                        <p>Skilled in using CSS to create responsive layouts, modern UI designs, and smooth animations.</p>
                        <a href="https://wa.me/8801612898695" target='_blank'><button className='skill-btn'>Discuss for Projects<FaArrowRightLong /> </button></a>
                    </div>
                    <div className="card-skill-2">
                        <span><IoLogoJavascript id='s-logo' /></span>
                        <h2>Java Script</h2>
                        <p>Able to build dynamic and interactive web features using JavaScript and DOM manipulation.</p>
                        <a href="https://wa.me/8801612898695" target='_blank'><button className='skill-btn'>Discuss for Projects<FaArrowRightLong /> </button></a>
                    </div>
                    <div className="card-skill-2">
                        <span><SiMongodb id='s-logo' /></span>
                        <h2>MongoDb</h2>
                        <p>Capable of designing and managing NoSQL databases and performing CRUD operations with MongoDB.</p>
                        <a href="https://wa.me/8801612898695" target='_blank'><button className='skill-btn'>Discuss for Projects<FaArrowRightLong /> </button></a>
                    </div>
                    <div className="card-skill-2">
                        <span><FaReact id='s-logo' /></span>
                        <h2>Raact</h2>
                        <p>Experienced in developing component-based and reusable user interfaces using React.</p>
                        <a href="https://wa.me/8801612898695" target='_blank'><button className='skill-btn'>Discuss for Projects<FaArrowRightLong /> </button></a>
                    </div>
                    <div className="card-skill-2">
                        <span><FaNodeJs id='s-logo' /></span>
                        <h2>Node Js</h2>
                        <p>Able to develop backend servers and REST APIs and manage database connections using Node.js.</p>
                        <a href="https://wa.me/8801612898695" target='_blank'><button className='skill-btn'>Discuss for Projects<FaArrowRightLong /> </button></a>
                    </div>
                    <div className="card-skill-2">
                        <span><FaFigma id='s-logo' /></span>
                        <h2>Figma To Code</h2>
                        <p>Proficient in creating UI/UX designs, wireframes, and website layouts using Figma.</p>
                        <a href="https://wa.me/8801612898695" target='_blank'><button className='skill-btn'>Discuss for Projects<FaArrowRightLong /> </button></a>
                    </div>
                    <div className="card-skill-2">
                        <span><RiTailwindCssFill id='s-logo' /></span>
                        <h2>Tailwind CSS</h2>
                        <p>Experienced in building fast and responsive designs using Tailwind CSS utility-first framework.</p>
                        <a href="https://wa.me/8801612898695" target='_blank'><button className='skill-btn'>Discuss for Projects<FaArrowRightLong /> </button></a>
                    </div>
                    <div className="card-skill-2">
                        <span><SiGsap id='s-logo' /></span>
                        <h2>GSAP</h2>
                        <p>Experienced in creating smooth, high-performance animations and interactive web effects using GSAP (GreenSock Animation Platform).</p>
                        <a href="https://wa.me/8801612898695" target='_blank'><button className='skill-btn'>Discuss for Projects<FaArrowRightLong /> </button></a>
                    </div>
                    <div className="card-skill-2">
                        <span><TbBrandNextjs id='s-logo' /></span>
                        <h2>NextJS</h2>
                        <p>Able to build optimized React applications with routing and server-side rendering using Next.js.</p>
                        <a href="https://wa.me/8801612898695" target='_blank'><button className='skill-btn'>Discuss for Projects<FaArrowRightLong /> </button></a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Myskill;