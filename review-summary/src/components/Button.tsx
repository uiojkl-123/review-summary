import React from 'react';
import './Button.scss';

interface ButtonProps {
    text: string;
    onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = (props) => {

    const { text, onClick } = props;

    return (
        <div className="button" onClick={onClick}>
            {text}
        </div>
    );
}
