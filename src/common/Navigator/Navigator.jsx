
import React from 'react';
import './Navigator.css';

import { useNavigate } from 'react-router-dom';

export const Navigator = ({ destination, path }) => {

    const navigate = useNavigate();

    return (
        <div className="navigatorDesign"
            onClick={() => navigate(path)}
        >{destination}

        </div>
    )
};