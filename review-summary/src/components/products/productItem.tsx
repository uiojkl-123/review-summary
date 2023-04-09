import React, { useState } from 'react';
import { Product } from "../../models/model";
import styled from "@emotion/styled";

interface ProductItemProps {
  product: Product;
}

const ItemWrapper = styled.div`
font-size: 1rem;
color: white;
margin: 0px;
`;

const ItemContainer = styled.div`
padding: 16px;
font-size: 1rem;
`;

const ImageLinkWrapper = styled.a`
position: relative;
display: inline-block;

&:hover {
	cursor: pointer;
}

&::after {
	content: "";
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: transparent;
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	font-weight: 300;
	transition-duration: 0.3s;
}

&:hover::after {
	content: "클릭하여 상품 보기";
	background-color: rgba(0, 0, 0, 0.7);
}
`;


const Image = styled.img`
width: 150px;
height: 150px;
border-radius: 8px;
object-fit: cover;
`;

const ProductInfo = styled.div`
height: 150px;
display: grid;
grid-template-rows: repeat(3, auto);
margin-left: 16px;
flex: 1;
`;

const Name = styled.div`
width: 100%;
font-size: 1.1rem;
margin-top: 5px;
max-height: 2rem;
line-height: 1.4;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
`;

const PriceScoreWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 4px;
`;

const Price = styled.div`
min-height: 30px;
font-size: 1.2rem;
margin-top: 10px;
font-weight: bold;
`;

const Rating = styled.div`
font-size: 1.15rem;
color: white;
margin: 0;
margin-top: 35px;
display: flex;
flex-direction: column;
`;

const ScoreLabel = styled.div`
font-weight: normal;
font-size: 0.9rem;
margin-bottom: 10px;
color: lightgray;
`;

const ScoreValue = styled.span`
font-weight: bold;
&::before {
	content: "★";
	color: red;
}
`;

const Keyword = styled.div`
display: inline-block;
background-color: rgba(255,255,255,0.8);
color: black;
border-radius: 2px;
padding: 2px 4px;
margin-right: 8px;
margin-bottom: 8px;
font-size: 0.9rem;
font-weight: bold;
transition-duration: 0.3s;

&:hover {
	background-color: rgba(255,255,255,0.5);
}
`;

const KeywordContainer = styled.div`
`;

const ReviewSummary = styled.div`
font-size: 14px;
margin: 10px;
margin-bottom: 8px;
overflow: hidden;
`;

const ReviewTextWrapper = styled.div`
display: flex;
flex-direction: row;
font-size: 16px;
line-height: 1.6;
`;

const ReviewTitle = styled.div`
font-weight: 300;
font-size: 0.9rem;
color: lightgray;
white-space: nowrap;
min-width: 25%;
`;

const ReviewContent = styled.div`
font-size: 1rem;
font-weight: 600;
display: block;
width: 100%;
`;

interface ReviewTextProps {
  title: string;
  content: any;
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

&:hover {
	color: #8ed0ff;
}
`;

const ExpandIcon = styled.div<{ expanded: boolean }>`
width: 12px;
height: 12px;
border-right: 2px solid #0077cc;
border-bottom: 2px solid #0077cc;
transform: rotate(${(props) => (props.expanded ? "45deg" : "-45deg")});
margin-left: 4px;
transition-duration: 0.5s;

&:hover {
	border-right: 2px solid #8ed0ff;
	border-bottom: 2px solid #8ed0ff;
}
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
			<ItemContainer>
				<div style={{ display: 'flex' }}>
					<ImageLinkWrapper href={product.url} target="_blank" rel="noopener noreferrer">
						<Image src={product.imgUrl} alt={product.name} />
					</ImageLinkWrapper>
					<ProductInfo>
						<Name>{product.name}</Name>
						<PriceScoreWrapper>
							<Price>{product.price}원</Price>
							<Rating>
								<ScoreLabel>평균 평점:</ScoreLabel>
								<ScoreValue>&nbsp;{product.score} / 5.0</ScoreValue>
							</Rating>
						</PriceScoreWrapper>
					</ProductInfo>
				</div>
			</ItemContainer>
			<Hr />
			<ItemContainer>
				<div style={{ display: 'flex', justifyContent: 'space-between' }}>
					<div>
						<ReviewSummary>
							<ReviewText title="리뷰 키워드" content={<KeywordContainer>{keywordList}</KeywordContainer>} />
						</ReviewSummary>
						<ReviewSummary>
							<ReviewText title="리뷰 요약" content={product.summary} />
						</ReviewSummary>
						{expand && (
							<>
								<ReviewSummary>
									<ReviewText title="긍정적인 평가" content={product.positive} />
								</ReviewSummary>
								<ReviewSummary>
									<ReviewText title="부정적인 평가" content={product.negative} />
								</ReviewSummary>
							</>
						)}
					</div>
					<ExpandButton onClick={() => setExpand(!expand)}>
						<ExpandIcon expanded={expand} />
					</ExpandButton>
				</div>
			</ItemContainer>
			<Hr style={{ height: "15px", backgroundColor: "#555555" }}/>
		</ItemWrapper>
  );
};
