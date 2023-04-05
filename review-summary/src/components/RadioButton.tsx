import React, { useEffect } from 'react';

interface RadioButtonProps {
    children?: React.ReactNode;
    value: string;
    name: string;
    defaultChecked?: boolean;
    disabled?: boolean;
    imgUrl?: string;
    checkedValue?: string;
}

export const RadioButton: React.FC<RadioButtonProps> = (props) => {

    const { children, value, name, defaultChecked, disabled, imgUrl, checkedValue } = props;

    const [radioState, setRadioState] = React.useState<boolean>(false);

    useEffect(() => {
        if (checkedValue === value) {
            setRadioState(true);
        } else {
            setRadioState(false);
        }
    }, [checkedValue, value])

    return (
        <label className={'radioButton ' + (radioState ? 'checked' : '')}>
            <input
                type="radio"
                value={value}
                name={name}
                defaultChecked={defaultChecked}
                disabled={disabled}
            />
            <div className="container">
                <div className="imageAndNameContainer">
                    <div className="categoryImage">
                        <img src={imgUrl} alt="" />
                    </div>
                    <div className="categoryName"> {children}</div>
                </div>
            </div>

        </label>
    );
}


