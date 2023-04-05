import React from 'react';
import './Loading.scss';
import { IonPage } from '@ionic/react';
import { BackBar } from '../components/BackBar';
import { Button } from '../components/Button';
import { Link, useLocation } from 'react-router-dom';
import { Container } from '../theme/theme';

interface LoadingProps {

}

export const Loading: React.FC<LoadingProps> = (props) => {


	const state = useLocation().state as any;

	const category = state.category;

	return (
		<IonPage className="loading">
			<Container>
				<div className="wrapper">
					<BackBar />
					<div className="contentContainer">
						<h2 className="title">정보를 불러오고 있어요!<br />잠시만 기다려주세요.</h2>
						<div className="loadingImage">
							<img src="loading" alt="" />
						</div>
					</div>
				</div>
				<div className="footer">
					<Link to={{ pathname: '/products/' + category }}> <Button />상품보기</Link>
				</div>
			</Container>
		</IonPage >
	);
}
