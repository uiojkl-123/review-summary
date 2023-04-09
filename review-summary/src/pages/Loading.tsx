import React, { MouseEvent, useEffect } from 'react';
import './Loading.scss';
import { IonPage } from '@ionic/react';
import { BackBar } from '../components/BackBar';
import { Button } from '../components/Button';
import { Link, useLocation } from 'react-router-dom';
import { Container } from '../theme/theme';
import styled from '@emotion/styled';

interface LoadingProps {}

const RippleContainer = styled.div`
	margin: 50px;
	margin-top: 0;
	margin-bottom: 0;
	width: calc(100% - 100px);
	height: calc(100vh - 550px);
	background-color: #020202;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	overflow: hidden;
	cursor: pointer;
`;

export const Loading: React.FC<LoadingProps> = (props) => {
  const state = useLocation().state as any;
  const category = state?.category;

	const triggerRipple = (x: number, y: number) => {
    const ripple = document.createElement('div');
    ripple.className = 'ripple';
    const diameter = 300; // You can set a fixed diameter or calculate it based on the container size
    const radius = diameter / 2;

    ripple.style.width = `${diameter}px`;
    ripple.style.height = `${diameter}px`;
    ripple.style.borderRadius = '50%';
    ripple.style.backgroundColor = 'rgba(38, 153, 251, 0.7)';
    ripple.style.position = 'absolute';
    ripple.style.transform = 'scale(0)';
    ripple.style.animation = 'ripple 1s ease-out';

    ripple.style.left = `${x - radius}px`;
    ripple.style.top = `${y - radius}px`;

    const container = document.querySelector('.ripple-container');
    container?.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 1000);
  };

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
		const x = e.clientX - e.currentTarget.getBoundingClientRect().left;
		const y = e.clientY - e.currentTarget.getBoundingClientRect().top;
	
		for (let i = 0; i < 3; i++) {
			setTimeout(() => {
				triggerRipple(x, y);
			}, i * 150); // Adjust the delay time between each circle
		}
	};
	

  useEffect(() => {
    const interval = setInterval(() => {
      const container = document.querySelector('.ripple-container');
      if (container) {
        const x = Math.random() * container.clientWidth;
        const y = Math.random() * container.clientHeight;
        triggerRipple(x, y);
      }
    }, 2000); // Adjust the interval time to your preference

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <IonPage className="loading">
      <BackBar />
      <Container>
        <div className="wrapper">
          <div className="contentContainer">
            <h2 className="title">정보를 불러오고 있어요!<br />잠시만 기다려주세요.</h2>
						<RippleContainer onClick={handleClick} className="ripple-container">
							<img src="loading" alt="" />
						</RippleContainer>
          </div>
        </div>
        <div className="footer">
          <Link to={{ pathname: '/products/' + category }}>
						<Button>상품보기</Button>
					</Link>
        </div>
      </Container>
    </IonPage >
  );
}
