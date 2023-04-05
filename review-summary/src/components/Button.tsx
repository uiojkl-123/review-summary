import React from 'react';
import './Button.scss';

interface ButtonProps {
    children?: React.ReactNode;
    className?: string;
    onClick?: () => void;
    widthType?: "small";
    radioState?: boolean;
    setRadioState?: (state: boolean) => void;
}

export const Button: React.FC<ButtonProps> = (props) => {

    const { children, onClick, className, widthType, radioState, setRadioState } = props;

    const handleOnClick = () => {
        if (setRadioState) {
            setRadioState(!radioState);
        }
        if (onClick) {
            onClick();
        }
    }

    return (
        <div className={"button " + className + " " + (widthType ? widthType : '')} onClick={onClick}>
            {children}
        </div>
    );
}
