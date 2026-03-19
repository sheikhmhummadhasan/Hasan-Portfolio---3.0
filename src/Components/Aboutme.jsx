import React from 'react';
import { GoArrowDownRight } from "react-icons/go";
import { GoArrowUpRight } from "react-icons/go";

const Aboutme = () => {
    return (
        <div>
            <section className="about-me">
                <div className="about-box-1">
                    <h3>ABOUT ME</h3>
                    <h1>My <span>work process</span></h1>
                    <p>My work process is simple yet effective. I understand your needs, plan strategically, and deliver high-quality results on time.</p>
                </div>
                <div className="about-box-2">
                    <div className="upper">
                        <div className="outer"><div className="inner"><h3>Research</h3></div></div><GoArrowDownRight  id='Rup'/>
                        <div className="outer"><div className="inner"><h3>Design</h3></div></div><GoArrowDownRight id='Rup2'/>
                        <div className="outer"><div className="inner"><h3>Testing & Review</h3></div></div><GoArrowDownRight id='Rup3'/>
                    </div>
                    <div className="down">
                        <div className="outer"><div className="inner"><h3>Planning</h3></div></div><GoArrowUpRight id='Rdown' />
                        <div className="outer"><div className="inner"><h3>Development</h3></div></div><GoArrowUpRight id='Rdown2' />
                        <div className="outer"><div className="inner"><h3>Delivery</h3></div></div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Aboutme;