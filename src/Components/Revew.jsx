import React from 'react';

const Revew = () => {
    return (
        <div>
            <section className="review">
                <div className="reviewer-pic">
                    <img src="src/assets/Subtract.png" alt="" id='sub' />
                    <img src="src/assets/clicnt.png" alt="" id='clint' />
                    <img src="src/assets/Subtract.png" alt="" id='sub-2' />
                </div>
                <div className="reviewer-comment">
                    <h2>“Service is good and I recommend”</h2>
                    <p>I’m extremely satisfied with the work delivered.
                        The project was completed on time with excellent attention to detail.
                        Communication throughout the process was smooth and professional.
                        The design and functionality exceeded my expectations.
                        Every requirement was understood and implemented perfectly.
                        I would highly recommend their services to anyone looking for quality work.</p>
                        <img src="src/assets/clint-signature.png" alt="" />
                </div>
            </section>
        </div>
    );
};

export default Revew;