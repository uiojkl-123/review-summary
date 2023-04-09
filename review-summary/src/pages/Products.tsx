import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';

import styled from "@emotion/styled";
import { IonPage } from '@ionic/react';

import { Container } from '../theme/theme';
import { Product } from '../models/model';
import { ProductItem } from '../components/products/productItem';
import { getProductsByCategory } from "../services/products.service"
import { SortOptions } from '../components/products/sort';

interface ProductsProps {
}

const ProductContainer = styled(Container)`
transition-duration: 0.5s;
padding: 0;
display: flex;
flex-direction: column;
align-items: flex-start;
overflow-y: auto;
height: calc(100vh - 40px);
`

const TitleContainer = styled.div`
width: 100%;
height: 60px;
background-color: #060606;
display: flex;
align-items: center;
`;

const SortContainer = styled.div`
width: 100%;
height: 60px;
background-color: #121212;
display: flex;
align-items: center;
justify-content: flex-end;
`;

const CancelButtonBox = styled.div`
height: 40px;
width: 40px;
display: flex;
align-items: center;
margin-left: 15px;
cursor: pointer;
transition-duration: 0.5s;
background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23ffffff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 5l-7 7 7 7'/%3E%3C/svg%3E") no-repeat center center;
`;


const Title = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
margin-left: -40px;
`;

const SortSelect = styled.select`
margin-right: 15px;
padding: 6px 24px 6px 8px;
border-radius: 14px;
background: transparent url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 10' width='12' height='6'%3E%3Cpath fill='%23ffffff' d='M4 7.5L8 0H0z'/%3E%3C/svg%3E") no-repeat right 0.5rem center;
border: 0.5px solid rgba(255,255,255,0.3);
appearance: none;
font-size: 14px;
color: #ffffff;
cursor: pointer;
&:focus {
	outline: none;
}
&:hover {
	background-color: #202020;
}
`;

const EmptyMessage = styled.div`
font-size: 18px;
font-weight: bold;
text-align: center;
display: flex;
justify-content: center;
align-items: center;
height: calc(100vh - 100px);
width: 100%;
`;



export const Products: React.FC<ProductsProps> = (props) => {
	const [products, setProducts] = useState<Product[]>([]);
	const param = useParams<any>()
	const category = param.category
	const history = useHistory();

	useEffect(() => {
		(async () => {
			const response = await getProductsByCategory(category);
			setProducts(response);
			console.log(response);
		})();
	}, [category]);
	
	const handleCancelClick = () => {
		history.push('/selectCategory');
	};

	const sortProducts = (option: SortOptions) => {
		let sortedProducts = [...products];
		switch (option) {
			case SortOptions.PriceAsc:
				sortedProducts.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
				break;
			case SortOptions.PriceDesc:
				sortedProducts.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
				break;
			case SortOptions.ScoreAsc:
				sortedProducts.sort((a, b) => parseFloat(a.score) - parseFloat(b.score));
				break;
			case SortOptions.ScoreDesc:
				sortedProducts.sort((a, b) => parseFloat(b.score) - parseFloat(a.score));
				break;
			default:
				break;
		}
		setProducts(sortedProducts);
	};

  return (
    <IonPage className="products">
      <TitleContainer>
        <CancelButtonBox onClick={handleCancelClick}/>
        <Title>
          {category}
        </Title>
      </TitleContainer>
			<SortContainer>
				<SortSelect
					onChange={(e) => sortProducts(e.target.value as SortOptions)}
				>
					{Object.entries(SortOptions).map(([key, value]) => (
						<option key={key} value={key}>
							{value}
						</option>
					))}
				</SortSelect>
      </SortContainer>
      <ProductContainer>
			{products.length > 0 ? (
        products.map((product) => (
					<>
						<ProductItem key={product.name} product={product} />
					</>
        ))) : 
				(
				<EmptyMessage>항목이 없습니다.</EmptyMessage>
				)
			}
      </ProductContainer>
    </IonPage>
  );
};
