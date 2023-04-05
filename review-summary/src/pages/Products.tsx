import React, { useEffect, useState } from 'react';
import { IonPage } from '@ionic/react';
import { Container } from '../theme/theme';
import styled from "@emotion/styled";
import { useParams } from 'react-router';
import { Product } from '../models/model';
import { getProductsByCategory } from '../services/products.service';

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

	const [products, setProducts] = useState<Product[]>([]);

	const param = useParams<any>()
	const category = param.category

	useEffect(() => {
		(async () => {
			const response = await getProductsByCategory(category);
			setProducts(response);
			console.log(response);
		})();
	}, [category]);

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
