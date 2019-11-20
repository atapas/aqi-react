import React from 'react';

const CityAQI = props => {
    const aqi = props.cityInfo.aqi;
    const placeName = props.cityInfo.station.name;

    const getCategorizedAQI = aqi => {
        let bColor = '#ebebeb';
        let fColor = '#000000';
        let impact = 'Unknown';

        if (aqi >= 0 && aqi <= 50) {
            impact = 'Good';
            bColor = '#52B947';
            fColor = '#000000';
        } else if (aqi >= 51 && aqi <= 100) {
            impact = 'Moderate';
            bColor = '#F3EC19';
            fColor = '#000000';
        } else if (aqi >= 101 && aqi <= 150) {
            impact = 'Unhealthy for Sensitive Groups';
            bColor = '#F57E20';
            fColor = '#FFFFFF';
        } else if (aqi >= 151 && aqi <= 200) {
            impact = 'Unhealthy';
            bColor = '#ED1D24';
            fColor = '#FFFFFF';
        } else if (aqi >= 201 && aqi <= 300) {
            impact = 'Very Unhealthy';
            bColor = '#7E2B7D';
            fColor = '#FFFFFF';
        } else if (aqi >= 301) {
            impact = 'Hazardous';
            bColor = '#480D27';
            fColor = '#FFFFFF';
        }
        let style = {
            backgroundColor: bColor,
            color: fColor
        };

        let catagorized = {};
        catagorized['impact'] = impact;
        catagorized['style'] = style;

        console.log(catagorized);

        return catagorized;
    }
    return (
        <div style={ getCategorizedAQI(aqi).style } className='cityInfo'>
            <span>{ placeName } - { aqi }</span>
            <div>{ getCategorizedAQI(aqi).impact }</div>
        </div>
    )
};

export default CityAQI;