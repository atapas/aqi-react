import React from 'react';
import { useAQIAPIs } from './useAQIAPIs';

import { TOKEN, FEED_AQI_BASE_URL } from './AQIConst';

const CityAQIDetails = props => {
    
    const [info, error] = useAQIAPIs(
        `${FEED_AQI_BASE_URL}${props.uid}/?token=${TOKEN}`
    );

    const names = {
        'pm25': "particulate matter 2.5(pm 2.5)",
        'pm10': "particulate matter 10(pm 10)",
        'o3': "Ozone",
        'no2': "Nitrogen Dioxide",
        'so2': "Sulphur Dioxide",
        'co': "Carbon Monoxyde",
        't': "Temperature",
        'w': "Wind",
        'r': "Rain (precipitation)",
        'h': "Relative Humidity",
        'd': "Dew",
        'p': "Atmostpheric Pressure"
    }
    
    const getSpectrum = iaqi => {
        let ret = [];
        Object.entries(iaqi).map(function(item) {
            let obj = {};
            let key = names[item[0]] ? names[item[0]] : item[0];
            obj['key'] = key;
            obj['value'] = item[1].v;
            ret.push(obj);
        });
        return ret;
    }

    const colorize = (name, value) => {
        if ([
            'particulate matter 2.5(pm 2.5)', 
            'particulate matter 10(pm 10)',
            'Ozone',
            'Nitrogen Dioxide',
            'Sulphur Dioxide',
            'Carbon Monoxyde'].indexOf(name) < 0) {
                return '';
            }
        if (value >= 0 && value <= 50) {
            return 'good';
        } else if (value >= 51 && value <= 100) {
            return 'moderate';
        } else if (value >= 101 && value <= 150) {
            return 'unhealthy-sentitive';
        } else if (value >= 151 && value <= 200) {
            return 'unhealthy';
        } else if (value >= 201 && value <= 300) {
            return 'very-unhealthy';
        } else if (value >= 301) {
            return 'hazardous';
        }
    }
       
    
    return(
        <React.Fragment>
            {error}
        {
            info.data ?
                
                <div className="details">
                    <span>
                        Prominent Pollutant is, <b>{ names[info.data.dominentpol] }</b>
                    </span>
                    <hr />
                    <ul>
                        {
                            getSpectrum(info.data.iaqi).map((spectrum, i) => (
                                <li key={i}>
                                    <span className={`dot ${colorize(spectrum.key, spectrum.value)}`}></span>
                                    <span>{spectrum.key}</span>: <span>{spectrum.value}</span>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                :
                <span>Loading...</span>
        }
        </React.Fragment>
        
        
    )
};

export default CityAQIDetails;