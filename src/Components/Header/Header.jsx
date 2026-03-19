import React from 'react';

const Header = () => {
    return (
        <div>
            <header>
                <nav>   
                    <h2 className='nav-box-1'><img src="src/assets/header-logo.png" alt="Logo" /> HasaN Portfolio</h2>
                    <div className="nav-box-2">
                        <h4 className='menu add'>Home</h4>
                        <h4 className='menu'>Service</h4>
                        <h4 className='menu'>Project</h4>
                        <h4 className='menu'>About</h4>
                        <h4 className='menu'>Clint</h4>
                        <h4 className='menu'>Contact</h4>
                    </div>
                    <div className="nav-box-3">
                        <button className='prime-btn'>Discuss for Projects</button>
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default Header;