import React from 'react';
import './SelectCategory.scss';
import { IonPage } from '@ionic/react';
import { BackBar } from '../components/BackBar';
import { Button } from '../components/Button';
import { CategoryItem } from '../components/CategoryItem';
import { Link } from 'react-router-dom';

interface SelectCategoryProps {

}

export const SelectCategory: React.FC<SelectCategoryProps> = (props) => {

    return (
        <IonPage className="selectCategory">
            <div className="wrapper">
                <BackBar />

                <div className="contentContainer">
                    <h2 className="title">카테고리를 선택해 주세요</h2>
                    <div className="categoryList">
                        <CategoryItem name="블루투스 이어폰" imgUrl='bluetoothEarphone' />
                        <CategoryItem name="휴대폰 케이스" imgUrl='phoneCase' />
                        <CategoryItem name="보조배터리" imgUrl='battery' />
                        <CategoryItem name="노트북" imgUrl='laptop' />
                        <CategoryItem name="애플워치 스트랩" imgUrl='appleWatchStrap' />
                    </div>
                </div>

            </div>
            <div className="footer">    
                <Link to='./loading'><Button text={'시작하기'} /></Link>
            </div>
        </IonPage>
    );
}
