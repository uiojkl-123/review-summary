import React, { MouseEvent } from 'react';
import './Loading.scss';
import { IonPage } from '@ionic/react';
import { BackBar } from '../components/BackBar';
import { Button } from '../components/Button';
import { Link, useLocation } from 'react-router-dom';
import { Container } from '../theme/theme';
import styled from '@emotion/styled';

interface LoadingProps {}

const RippleContainer = styled.div`
  width: 300px;
  height: 300px;
  background-color: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  border: 1px solid #ccc;
  cursor: pointer;
`;

export const Loading: React.FC<LoadingProps> = (props) => {
  const state = useLocation().state as any;
  const category = state?.category;

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    const ripple = document.createElement("div");
    ripple.className = "ripple";
    const diameter = Math.max(e.currentTarget.clientWidth, e.currentTarget.clientHeight);
    const radius = diameter / 2;

    ripple.style.width = `${diameter}px`;
    ripple.style.height = `${diameter}px`;
    ripple.style.borderRadius = '50%';
    ripple.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
    ripple.style.position = 'absolute';
    ripple.style.transform = 'scale(0)';
    ripple.style.animation = 'ripple 1s ease-out';

    const x = e.clientX - e.currentTarget.getBoundingClientRect().left - radius;
    const y = e.clientY - e.currentTarget.getBoundingClientRect().top - radius;

    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    e.currentTarget.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 1000);
  };

  return (
    <IonPage className="loading">
      <BackBar />
      <Container>
        <div className="wrapper">
          <div className="contentContainer">
            <h2 className="title">정보를 불러오고 있어요!<br />잠시만 기다려주세요.</h2>
            <RippleContainer onClick={handleClick}>
              <img src="loading" alt="" />
            </RippleContainer>
          </div>
        </div>
        <div className="footer">
          <Link to={{ pathname: '/products/' + category }}> <Button>상품보기</Button></Link>
        </div>
      </Container>
    </IonPage >
  );
}
