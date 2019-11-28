import React, { useState } from 'react';

import moment from 'moment';

import CityAQIDetails from './CityAQIDetails';

const CityAQI = props => {
    const [showDetails, setShowDetails] = useState(false);

    const aqi = props.cityInfo.aqi;
    const placeName = props.cityInfo.station.name;
    const atTime = props.cityInfo.time.stime;
    const uid = props.cityInfo.uid;

    const getCategorizedAQI = aqi => {
        let className = 'unknown';
        let impact = 'Unknown';

        if (aqi >= 0 && aqi <= 50) {
            impact = 'Good';
            className = 'good';
        } else if (aqi >= 51 && aqi <= 100) {
            impact = 'Moderate';
            className = 'moderate';
        } else if (aqi >= 101 && aqi <= 150) {
            impact = 'Unhealthy for Sensitive Groups';
            className = 'unhealthy-sentitive';
        } else if (aqi >= 151 && aqi <= 200) {
            impact = 'Unhealthy';
            className = 'unhealthy';
        } else if (aqi >= 201 && aqi <= 300) {
            impact = 'Very Unhealthy';
            className = 'very-unhealthy';
        } else if (aqi >= 301) {
            impact = 'Hazardous';
            className = 'hazardous';
        }
        
        let catagorized = {};
        catagorized['impact'] = impact;
        catagorized['className'] = className;

        return catagorized;
    };
    
    const getAtTimeFormatted = time => {
        return moment(time).format('h:mm:ss a');
    }
    return (
        <div  
            className={`cityInfo ${getCategorizedAQI(aqi).className}`}
            onClick={ () => setShowDetails(!showDetails)}>
            <span>At { getAtTimeFormatted(atTime) }: { placeName } - { aqi }</span>
            <div><b>{ getCategorizedAQI(aqi).impact }</b></div>
            { showDetails && <CityAQIDetails uid={ uid } /> }
        </div>
    )
};

export default CityAQI;