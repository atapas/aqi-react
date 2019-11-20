import React from 'react';
import { useAQIAPIs } from './useAQIAPIs';

import { TOKEN, FEED_AQI_BASE_URL } from './AQIConst';

const CityAQIDetails = props => {
    
    const [info , loading, error] = useAQIAPIs(
        `${FEED_AQI_BASE_URL}${props.uid}/?token=${TOKEN}`
    );
    
    if (info.data) {
        console.log('info', info.data);
    }
    
    
    return(
        <React.Fragment>
            {error}
        {
            info.data ?
                
                <div className="details">
                    <span>Prominent Pollutant is: { info.data.dominentpol }</span>
                </div>
                :
                <span>Loading...</span>
        }
        </React.Fragment>
        
        
    )
};

export default CityAQIDetails;