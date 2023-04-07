import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import styled from "@emotion/styled";

import { IonPage } from '@ionic/react';
import { Container } from '../theme/theme';
import { Product } from '../models/model';
import { ProductItem } from '../components/products/productItem';
import { getProductsByCategory } from "../services/products.service"

interface ProductsProps {
}

const ProductContainer = styled(Container)`
	padding: 0;
	display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow-y: auto;
  height: calc(100vh - 40px);
`

const TitleContainer = styled.div`
width: 100%;
height: 40px;
background-color: rgba(0,0,0,0.7);
display: flex;
align-items: center;
`;

const CancelButtonBox = styled.div`
height: 40px;
width: 40px;
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
margin-left: -40px;
`;

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
          {category}
        </Title>
      </TitleContainer>
      <ProductContainer>
        {products.map((product) => (
					<>
						<ProductItem key={product.name} product={product} />
					</>
        ))}
      </ProductContainer>
    </IonPage>
  );
};
