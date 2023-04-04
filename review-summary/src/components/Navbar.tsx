import React from 'react';
import './Navbar.scss';

interface NavbarProps {

}

export const Navbar: React.FC<NavbarProps> = (props) => {

    return (
        <div className="navbar">
            <div className="container">
                <div className="logo">
                    <img src="assets/logo.png" alt="" />
                </div>
                <div className="title">
                    <h1>리뷰 요약</h1>
                </div>
            </div>
        </div>
    );
}
