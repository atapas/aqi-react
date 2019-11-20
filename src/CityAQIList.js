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
            {
                cityList.length > 0
                ?
                cityList.map((cityInfo, i) => (
                    <li key={i}>
                        <CityAQI cityInfo={cityInfo} />
                    </li>
                ))
                :
                <h2>No Data Found</h2>
            }
            </ul>
        </div>
    )
};

export default CityAQIList;