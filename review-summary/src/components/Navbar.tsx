import React from 'react';
import { useHistory } from 'react-router-dom';

import './Navbar.scss';
import styled from "@emotion/styled";
import { BackBar } from './BackBar';

interface NavbarProps {

}

const NavbarWrapper = styled.div`
width: 100%;
max-width: 480px;
height: 70;
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
height: 100%;
cursor: pointer;
`;

const Logo = styled.img`
height: 100%;
width: auto;
`;

const TitleContainer = styled.div`
margin: 0px;
padding: 0px;
cursor: pointer;
`;

const Title = styled.div`
margin: 0;
font-size: 1.8rem;
line-height: 28px;
font-weight: 800;
color: white;
`;

export const Navbar: React.FC<NavbarProps> = (props) => {
	const history = useHistory();

	const handleLogpClick = () => {
		history.push('/home');
	};

	return (
		<NavbarWrapper className="navbar">
			<NavbarContainer className="container">
				<LogoContainer className="logo" onClick={handleLogpClick}>
					<Logo src="assets/logo_small_icon.png" alt="" />
				</LogoContainer>
				<TitleContainer className="title" onClick={handleLogpClick}>
					<Title>
						RevuGenius
					</Title>
				</TitleContainer>
			</NavbarContainer>
		</NavbarWrapper>
	);
}
