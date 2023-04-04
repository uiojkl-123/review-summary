import React from 'react';
import './CategoryItem.scss';

interface CategoryItemProps {
    imgUrl: string;
    name: string;
}

export const CategoryItem: React.FC<CategoryItemProps> = (props) => {

    const { imgUrl, name } = props;

    return (
        <div className="categoryItem">
            <div className="container">
                <div className="categoryImage">
                    <img src={imgUrl} alt="" />
                </div>
                <div className="categoryName">{name}</div>
            </div>
        </div>
    );
}
