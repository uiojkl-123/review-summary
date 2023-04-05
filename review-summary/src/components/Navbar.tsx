import React from 'react';
import './Navbar.scss';
import styled from "@emotion/styled";

interface NavbarProps {

}

const NavbarWrapper = styled.div`
width: 100%;
max-width: 480px;
height: 96px;
margin: 0px auto;
background: black;
z-index: 100;
`;

const NavbarContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-start;
height: 100%;
`;

const LogoContainer = styled.div`
width: 96px;
height: 96px;
cursor: pointer;
`;

const Logo = styled.img`
width: 100%;
height: 100%;
`;

const TitleContainer = styled.div`
font-size: 24px;
font-weight: 700;
color: white;
margin: 0px;
padding: 0px;
margin-top: 32px;
margin-left: 24px;
`;

const Title = styled.div`
font-size: 2.3rem;
height: 96px;
margin: 0;
`;

export const Navbar: React.FC<NavbarProps> = (props) => {
    return (
        <NavbarWrapper className="navbar">
            <NavbarContainer className="container">
                <LogoContainer className="logo">
                    <Logo src="assets/logo.png" alt="" />
                </LogoContainer>
                <TitleContainer className="title">
                    <Title>
											RevuGenius
										</Title>
                </TitleContainer>
            </NavbarContainer>
        </NavbarWrapper>
    );
}
