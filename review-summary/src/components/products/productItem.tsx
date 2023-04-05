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
  margin: 0;
  margin-bottom: 8px;
  max-height: 48px;
  line-height: 1.4;
  overflow: hidden;
`;

const Price = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const PosNeg = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  margin-bottom: 8px;
`;

const Rating = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const ReviewKeywords = styled.p`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const ReviewSummary = styled.p`
  font-size: 14px;
  margin-bottom: 8px;
`;

export const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  return (
    <ItemWrapper>
      <div style={{ display: 'flex' }}>
        <Image src={product.imgUrl} alt={product.name} />
        <ProductInfo>
          <Name>{product.name}</Name>
          <Price>{product.price}원</Price>
          <PosNeg>
            <div>긍정 지수: {product.positive}</div>
            <div>부정 지수: {product.negative}</div>
          </PosNeg>
          <Rating>평균 평점: ★{product.score}/5.0</Rating>
        </ProductInfo>
      </div>
      <ReviewKeywords>리뷰 키워드: {product.keywords}</ReviewKeywords>
      <ReviewSummary>리뷰 요약: {product.summary}</ReviewSummary>
    </ItemWrapper>
  );
};
