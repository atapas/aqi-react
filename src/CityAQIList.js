import React from 'react';

import CityAQI from './CityAQI';

const CityAQIList = props => {
    let  cityList = [];    
    if (props.data) {
        cityList = props.data;
    }
    
    
    return (
        <div>
            <ul>
            <h2> Cities </h2>
            {
                cityList.map((cityInfo, i) => (
                    <li key={i}>
                        <CityAQI cityInfo={cityInfo} />
                    </li>
                ))
            }
            </ul>
        </div>
    )
};

export default CityAQIList;