import React from 'react';
import { IonPage } from '@ionic/react';
import { Container } from '../theme/theme';
import styled from "@emotion/styled";

interface ProductsProps {
}

const TitleContainer = styled.div`
width: 100%;
height: 40px;
background-color: black;
display: flex;
align-items: center;
`;

const CancelButtonBox = styled.div`
height: 100%;
display: flex;
align-items: center;
margin-left: 15px;
cursor: pointer;
`;

const Title = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
margin-left: -15px;
`;

const tmpTitle = "tmp_title_name";

export const Products: React.FC<ProductsProps> = (props) => {

    return (
        <IonPage className="products">
					<TitleContainer>
						<CancelButtonBox>
							&#60;
						</CancelButtonBox>
						<Title>
							{tmpTitle}
						</Title>
					</TitleContainer>
					<Container>
            Products
					</Container>
        </IonPage>
    );
}
