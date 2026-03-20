import React from 'react';
import { GoArrowRight } from "react-icons/go";


const MyCompliteProject = () => {
    return (
        <div>
            <section className="C-project">
                <div className="skil-1 C-project-1">
                    <div className="s-box-1">
                        <h3>PORTFOLIO</h3>
                        <h2>My <span>completed projects</span></h2>
                        <p>Completed multiple web development projects demonstrating skills in modern frontend and backend technologies.
                            Focused on responsive design, clean UI, and real-world functionality to solve practical problems.</p>
                    </div>
                </div>
                <div className="C-project-2">
                    <div className="project-card">
                        <img src="src/assets/Personal Project photo/1.png" alt="" height={200}/>
                        <h2>English Jannala</h2>
                        <h1>$70</h1>
                        <a href="https://sheikhmhummadhasan.github.io/camera-ecomerce-website/"><button className='p-btn'>View Larger <GoArrowRight /></button></a>
                    </div>
                    
                    <div className="project-card">
                        <img src="src/assets/Personal Project photo/2.png" alt="" height={200}/>
                        <h2>G3 Architect</h2>
                        <h1>$70</h1>
                        <a href="https://sheikhmhummadhasan.github.io/Responsive-Website/"><button className='p-btn'>View Larger <GoArrowRight /></button></a>
                    </div>

                    <div className="project-card">
                        <img src="src/assets/Personal Project photo/3.png" alt="" height={200}/>
                        <h2>GSAP project</h2>
                        <h1>$70</h1>
                        <a href="https://sheikhmhummadhasan.github.io/GASP-Project/"><button className='p-btn'>View Larger <GoArrowRight /></button></a>
                    </div>

                    <div className="project-card">
                        <img src="src/assets/Personal Project photo/4.png" alt="" height={200}/>
                        <h2>Influencer Product Landing Page</h2>
                        <h1>$70</h1>
                        <a href="https://sheikhmhummadhasan.github.io/camera-ecomerce-website/"><button className='p-btn'>View Larger <GoArrowRight /></button></a>
                    </div>

                    <div className="project-card">
                        <img src="src/assets/Personal Project photo/5.png" alt="" height={200}/>
                        <h2>My Previews portfolio Landing Page</h2>
                        <h1>$70</h1>
                        <a href="https://sheikhmhummadhasan.github.io/Hasan-s-Portfolio-2.0/"><button className='p-btn'>View Larger <GoArrowRight /></button></a>
                    </div>

                    <div className="project-card">
                        <img src="src/assets/Personal Project photo/6.png" alt="" height={200}/>
                        <h2>Knoladge Vault</h2>
                        <h1>$70</h1>
                        <a href="https://sheikhmhummadhasan.github.io/B13-A01-Knowledge-Vault-ASSINMENT-1/"><button className='p-btn'>View Larger <GoArrowRight /></button></a>
                    </div>

                    <div className="project-card">
                        <img src="src/assets/Personal Project photo/7.png" alt="" height={200}/>
                        <h2>Tea House website</h2>
                        <h1>$70</h1>
                        <a href="https://sheikhmhummadhasan.github.io/Tea-House-project-responsive/"><button className='p-btn'>View Larger <GoArrowRight /></button></a>
                    </div>

                    <div className="project-card">
                        <img src="src/assets/Personal Project photo/8.png" alt="" height={200}/>
                        <h2>Techwave Landing Page</h2>
                        <h1>$70</h1>
                        <a href=" https://sheikhmhummadhasan.github.io/PH-Assinment-2/"><button className='p-btn'>View Larger <GoArrowRight /></button></a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MyCompliteProject;