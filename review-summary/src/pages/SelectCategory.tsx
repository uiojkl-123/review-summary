import React from 'react';
import './SelectCategory.scss';
import { IonPage } from '@ionic/react';
import { BackBar } from '../components/BackBar';
import { Button } from '../components/Button';
import { CategoryItem } from '../components/CategoryItem';
import { Link } from 'react-router-dom';

import { Container } from '../theme/theme';
import { RadioButton } from '../components/RadioButton';

interface SelectCategoryProps {

}

export const SelectCategory: React.FC<SelectCategoryProps> = (props) => {

	const [checkedValue, setCheckedValue] = React.useState('bluetoothEarphone');


	return (
		<IonPage className="selectCategory">
			<BackBar />
			<Container>
				<div className="wrapper">

					<div className="contentContainer">
						<h2 className="title">카테고리를 선택해 주세요</h2>
						<div className="categoryList">
							<form onChange={
								(e) => {
									//@ts-ignore
									setCheckedValue(e.target.value);
								}
							}>
								<fieldset>
									<RadioButton name="contact" value="bluetoothEarphone" defaultChecked checkedValue={checkedValue}>
										블루투스 이어폰
									</RadioButton>
									<RadioButton name="contact" value="phoneCase" checkedValue={checkedValue}>
										휴대폰 케이스
									</RadioButton>
									<RadioButton name="contact" value="battery" checkedValue={checkedValue}>
										보조배터리
									</RadioButton>
									<RadioButton name="contact" value="laptop" checkedValue={checkedValue}>
										노트북
									</RadioButton>
									<RadioButton name="contact" value="appleWatchStrap" checkedValue={checkedValue}>
										애플워치 스트랩
									</RadioButton>
								</fieldset>
							</form>
						</div>
					</div>
				</div>
				<div className="footer">
					<Link to={{ pathname: '/loading', state: { category: checkedValue } }}><Button>리뷰 분석하기</Button></Link>
				</div>
			</Container>
		</IonPage>
	);
}
