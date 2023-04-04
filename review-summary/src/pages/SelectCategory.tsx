import React from 'react';
import './SelectCategory.scss';
import { IonPage } from '@ionic/react';
import { BackBar } from '../components/BackBar';
import { Button } from '../components/Button';
import { CategoryItem } from '../components/CategoryItem';

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
                        <CategoryItem kind='bluetoothEarphone' />
                        <CategoryItem kind='phoneCase' />
                        <CategoryItem kind='battery' />
                        <CategoryItem kind='laptop' />
                        <CategoryItem kind='appleWatchStrap' />
                    </div>
                </div>


                <div className="footer">
                    <Button text={'시작하기'} />
                </div>
            </div>
        </IonPage>
    );
}
