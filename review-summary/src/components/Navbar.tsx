import React from 'react';
import './Navbar.scss';
import styled from "@emotion/styled";

interface NavbarProps {

}

const NavbarWrapper = styled.div`
width: 100%;
max-width: 480px;
height: 64px;
margin: 0px auto;
background: black;
z-index: 100;
display: flex;
flex-direction: column;
justify-content: flex-end;
padding: 24px;
`;

const NavbarContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-start;
height: 28px;
gap: 8px;
align-items: flex-end;
`;

const LogoContainer = styled.div`
width: auto ;
height: 100%;
cursor: pointer;
`;

const Logo = styled.img`
width: 100%;
height: 100%;
`;

const TitleContainer = styled.div`
margin: 0px;
padding: 0px;
`;

const Title = styled.div`
margin: 0;
font-size: 24px;
line-height: 28px;
font-weight: 600;
color: white;
`;

export const Navbar: React.FC<NavbarProps> = (props) => {
    return (
        <NavbarWrapper className="navbar">
            <NavbarContainer className="container">
                <LogoContainer className="logo">
                    <Logo src="assets/logo_small_icon.png" alt="" />
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
