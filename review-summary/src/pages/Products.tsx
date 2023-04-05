import React from 'react';
import { IonPage } from '@ionic/react';
import { Container } from '../theme/theme';

interface ProductsProps {
}
export const Products: React.FC<ProductsProps> = (props) => {

    return (
        <IonPage className="products">
					<Container>
            Products
					</Container>
        </IonPage>
    );
}
