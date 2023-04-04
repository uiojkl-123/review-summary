import React from 'react';
import './CategoryItem.scss';

interface CategoryItemProps {
    kind: 'bluetoothEarphone' | 'phoneCase' | 'battery' | 'laptop' | 'appleWatchStrap'
}

export const CategoryItem: React.FC<CategoryItemProps> = (props) => {

    return (
        <div className="categoryItem">
            CategoryItem
        </div>
    );
}
