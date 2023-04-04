import React from 'react';
import './Products.scss';
import { IonPage } from '@ionic/react';

interface ProductsProps {

}

export const Products: React.FC<ProductsProps> = (props) => {

    return (
        <IonPage className="Products">
            Products
        </IonPage>
    );
}
