import React from 'react';
import './BackBar.scss';
import { Link, useHistory } from 'react-router-dom';
import styled from "@emotion/styled";

interface BackBarProps {
    title?: string;
    inProduct?: boolean;

}


const TitleContainer = styled.div`
width: 100%;
height: 60px;
background-color: #060606;
display: flex;
align-items: center;
`;

const CancelButtonBox = styled.div`
height: 40px;
width: 40px;
display: flex;
align-items: center;
margin-left: 15px;
cursor: pointer;
transition-duration: 0.5s;
background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23ffffff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 5l-7 7 7 7'/%3E%3C/svg%3E") no-repeat center center;
position: relative;
z-index: 2;
`;


const Title = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
margin-left: -40px;
color: white;
margin: 0px auto;
position: absolute;
z-index: 0;
`;
export const BackBar: React.FC<BackBarProps> = (props) => {

    const { title, inProduct } = props;

    return (
        // <div className="backBar">
        //     <div className="backButton" onClick={() => history.goBack()}>
        //         <img src="assets/back_icon.png" alt="" />
        //     </div>
        // </div>
        <TitleContainer className={inProduct ? 'blackBg' : ''}>
            <Link to={inProduct ? '/selectCategory' : '..'}>
                <CancelButtonBox />
            </Link>
            <Title>
                {title}
            </Title>
        </TitleContainer>

    );
}
