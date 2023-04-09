import React, { useState } from 'react';
import { Product } from "../../models/model";
import styled from "@emotion/styled";

interface ProductItemProps {
  product: Product;
}

const ItemWrapper = styled.div`
font-size: 1rem;
`;

const ItemContainer = styled.div`
padding: 16px;
font-size: 1rem;
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

const Name = styled.div`
height: 100%;
font-size: 1.4rem;
font-weight: bold;
margin-top: 5px;
max-height: 4.2rem;
line-height: 1.4;
overflow: hidden;
white-space: pre-wrap;
display: -webkit-box;
-webkit-line-clamp: 3;
-webkit-box-orient: vertical;
text-overflow: ellipsis;
`;

const Price = styled.div`
height: 50%;
margin-top: 10%;
min-height: 30px;
font-size: 1.2rem;
font-weight: bold;
`;

const Rating = styled.div`
font-size: 1.15rem;
font-weight: normal;
color: white;
margin: 0;
`;

const KeywordLabel = styled.div`
margin-bottom: 8px;
color: lightgray;
font-size: 1.2rem;
`;

const Keyword = styled.div`
display: inline-block;
background-color: white;
color: black;
border-radius: 4px;
padding: 4px 8px;
margin-right: 8px;
margin-bottom: 8px;
font-size: 1.1rem;
font-weight: bold;
`;

const KeywordContainer = styled.div`
padding-left: 1rem;
`;

const ReviewKeywords = styled.div`
margin: 10px;
`;

const ReviewSummary = styled.div`
font-size: 14px;
margin: 10px;
margin-bottom: 8px;
overflow: hidden;
`;

const ReviewTextWrapper = styled.div`
display: flex;
flex-direction: column;
font-size: 16px;
line-height: 1.6;
`;

const ReviewTitle = styled.span`
font-weight: normal;
font-size: 1.2rem;
color: lightgray;
white-space: nowrap;
`;

const ReviewContent = styled.span`
font-size: 1.15rem;
font-weight: 600;
display: block;
padding-left: 1em;
`;

interface ReviewTextProps {
  title: string;
  content: string;
}

const ReviewText: React.FC<ReviewTextProps> = ({ title, content }) => {
  return (
    <ReviewTextWrapper>
      <ReviewTitle>{title}</ReviewTitle>
      <ReviewContent>{content}</ReviewContent>
    </ReviewTextWrapper>
  );
};

const ExpandButton = styled.button`
background: none;
border: none;
outline: none;
font-weight: bold;
color: #0077cc;
cursor: pointer;
margin-left: auto;
display: flex;
align-items: baseline;
transition-duration: 0.5s;
`;

const ExpandIcon = styled.div<{ expanded: boolean }>`
width: 12px;
height: 12px;
border-right: 2px solid #0077cc;
border-bottom: 2px solid #0077cc;
transform: rotate(${(props) => (props.expanded ? "45deg" : "-45deg")});
margin-left: 4px;
transition-duration: 0.5s;
`;

const Hr = styled.div`
height: 1px;
width: 100%;
background-color: #a8a8a8;
transition-duration: 0.5s;
`

export const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  const [expand, setExpand] = useState(false);
  const keywordList = product.keywords.split(', ').map((keyword, index) => (
    <Keyword key={index}>{keyword}</Keyword>
  ));

  return (
		<ItemWrapper>
			<Hr />
			<ItemContainer>
				<div style={{ display: 'flex' }}>
					<Image src={product.imgUrl} alt={product.name} />
					<ProductInfo>
						<Name>{product.name}</Name>
						<Price>{product.price}원</Price>
						<Rating>평균 평점: <b>★{product.score}/5.0</b></Rating>
					</ProductInfo>
				</div>
			</ItemContainer>
			<Hr />
			<ItemContainer>
				<div style={{ display: 'flex', justifyContent: 'space-between' }}>
					<div>
						<ReviewKeywords>
							<KeywordLabel>- 리뷰 키워드</KeywordLabel>
							<KeywordContainer>{keywordList}</KeywordContainer>
						</ReviewKeywords>
						<ReviewSummary>
							<ReviewText title="- 리뷰 요약" content={product.summary} />
						</ReviewSummary>
						{expand && (
							<>
								<ReviewSummary>
									<ReviewText title="- 긍정적인 평가" content={product.positive} />
								</ReviewSummary>
								<ReviewSummary>
									<ReviewText title="- 부정적인 평가" content={product.negative} />
								</ReviewSummary>
							</>
						)}
					</div>
					<ExpandButton onClick={() => setExpand(!expand)}>
						<ExpandIcon expanded={expand} />
					</ExpandButton>
				</div>
			</ItemContainer>
			<Hr />
		</ItemWrapper>
  );
};
