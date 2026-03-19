import React from 'react';
import { MdOutlineArrowRightAlt } from "react-icons/md";


const Hero_section = () => {
    return (
        <div>
            <section className='hero'>
                    <div className="info-div">
                    <h1 id='who'>This is your web-developer</h1>
                    <h1 id='name'>Md Hasan Sheik</h1>
                    <p>Hi, this is Md Hasan Sheikh — a passionate and professional web developer. I specialize in creating modern, responsive, and user-friendly websites that deliver real results. Through this portfolio, you’ll discover my skills, creativity, and dedication to building experiences that make clients happy. Let’s turn your ideas into something amazing.
                    </p>
                    <div className="btns">
                        <button className="prime-btn">Discuss For Project</button>
                        <button className='sec-btn'>View Portfolio <MdOutlineArrowRightAlt />
                        </button>
                    </div>
                </div>
                <div className="developer-div">
                    <img src="src/assets/model.png" alt="" id='hasna-img' />
                    <img src="src/assets/Subtract.png" alt="" id='star'/>
                    <img src="src/assets/zali1.png" alt="" height={70} id='zali'/>
                    <div class="skill-box">
                        <span class="skill-text">100% Skilled Developer</span>
                        <span class="circle circle-1"></span>
                        <span class="circle circle-2"></span>
                        <span class="line line-1"></span>
                        <span class="line line-2"></span>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hero_section;