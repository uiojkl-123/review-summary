// productItem.tsx
import React from 'react';
import { Product } from "../../models/model";
import styled from "@emotion/styled"

interface ProductItemProps {
  product: Product;
}

const ItemWrapper = styled.div`
  padding: 16px;
  margin-bottom: 24px;
`;

const Image = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 8px;
  object-fit: cover;
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
`;

const Name = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin: 10px;
  margin-top: 5px;
  margin-bottom: 0px;
  max-height: 48px;
  line-height: 1.4;
  overflow: hidden;
`;

const Price = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin: 10px;
  margin-bottom: 0px;
`;

const PosNeg = styled.div`
  font-size: 14px;
  margin: 10px;
  margin-bottom: 0px;
`;

const Rating = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin: 10px;
  margin-bottom: 0px;
`;

const Keyword = styled.div`
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 8px;
  margin-right: 4px;
  font-size: 14px;
  font-weight: bold;
`;

const ReviewKeywords = styled.p`
  margin: 10px;
  margin-bottom: 8px;
`;

const ReviewSummary = styled.p`
  font-size: 14px;
  margin: 10px;
  margin-bottom: 8px;
`;

export const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  const keywordList = product.keywords.split(', ').map((keyword, index) => (
    <Keyword key={index}>{keyword}</Keyword>
  ));

  return (
    <ItemWrapper>
      <div style={{ display: 'flex' }}>
        <Image src={product.imgUrl} alt={product.name} />
        <ProductInfo>
          <Name>{product.name}</Name>
          <Price>{product.price}원</Price>
          <Rating>평균 평점: ★{product.score}/5.0</Rating>
					<ReviewKeywords>{keywordList}</ReviewKeywords>
        </ProductInfo>
      </div>
			<PosNeg>
				<div>
					<div><b>긍정적인 평가</b></div>
					{product.positive}
				</div>
				<br />
				<div>
					<div><b>부정적인 평가</b></div>
					{product.negative}
				</div>
			</PosNeg>
      <ReviewSummary>리뷰 요약: {product.summary}</ReviewSummary>
    </ItemWrapper>
  );
};
