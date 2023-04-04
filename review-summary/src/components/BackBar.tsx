import React from 'react';
import './BackBar.scss';
import { Link, useHistory } from 'react-router-dom';

interface BackBarProps {

}

export const BackBar: React.FC<BackBarProps> = (props) => {

    const history = useHistory();

    return (
        <div className="backBar">
            <div className="backButton" onClick={() => history.goBack()}>
                <img src="assets/back_icon.png" alt="" />
            </div>
        </div>
    );
}
