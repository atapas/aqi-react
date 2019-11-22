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
                <h3>No Data Found. How about trying out a City name?</h3>
            }
            </ul>
        </div>
    )
};

export default CityAQIList;