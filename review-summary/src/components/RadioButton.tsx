import React, { useEffect } from 'react';

interface RadioButtonProps {
    children?: React.ReactNode;
    value: string;
    name: string;
    defaultChecked?: boolean;
    disabled?: boolean;
    checkedValue?: string;
}

export const RadioButton: React.FC<RadioButtonProps> = (props) => {

    const { children, value, name, defaultChecked, disabled, checkedValue } = props;

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
                        <img src={'assets/asset_icon_' + value + '.png'} alt="" />
                    </div>
                    <div className="categoryName"> {children}</div>
                </div>

                <div className="checkedIcon">
                        <img src='assets/asset_icon_select.svg' alt='' />
                    </div>
            </div>

        </label>
    );
}


