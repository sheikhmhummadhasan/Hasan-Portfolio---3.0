import React from 'react';

const Spacilaty = () => {
    return (
        <div>
            <section className="spacilaty">
                <div className="s-box-1">
                    <h3>SPECIALITY</h3>
                    <h2>My <span>speciality</span></h2>
                    <p>I am skilled in Keyword Recharge, Web Development, and Illustration Design
                        i create creative and effective solutions to bring ideas to life.</p>
                </div>
                <div className="s-box-2">
                    <div className="card">
                        <h1>WEB</h1>
                        <h3>Keyword Research</h3>
                        <p>I build responsive and modern Web Development projects that look great and work smoothly.</p>
                    </div>
                    <div className="card">
                        <h1>Ai</h1>
                        <h3>Illustration Design</h3>
                        <p>I create stunning Illustration Designs to visually bring ideas to life.</p>
                    </div>
                    <div className="card">
                        <img src="src/assets/KD.png" alt="" />
                        <h3>Keyword Research</h3>
                        <p>I specialize in Keyword Recharge to optimize and manage your digital campaigns effectively.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Spacilaty;