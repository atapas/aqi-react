import React, { useState } from 'react';

import { useAQIAPIs } from './useAQIAPIs';

import { TOKEN, SEARCH_CITIES_BASE_URL } from './AQIConst';

import CityAQIList from './CityAQIList';

const SearchCities = () => {
    const [url, setUrl] = useState('');
    const [cities , loading, error] = useAQIAPIs(url);
    const [searchText, setSearchText] = useState('');
    
    const searchCityName = (event) => {
        event.preventDefault();
        console.log(searchText);
        setUrl(`${SEARCH_CITIES_BASE_URL}?token=${TOKEN}&keyword=${searchText}`);
    }

    const handleSearchTextChange = (event) => {
        console.log(event.target.value);
        setSearchText(event.target.value);
    }
    return(
        <div>
            { error }
            <form onSubmit={ e => searchCityName(e)}>
                <label>
                City:
                <input 
                    type="text" 
                    value={ searchText } 
                    placeholder="Enter a City Name"
                    onChange={ e => handleSearchTextChange(e) } />
                </label>
                <input type="submit" value="Show AQI" />
            </form>
            {
                loading ?
                    (<span>loading...</span>)
                    :
                    (<CityAQIList data={cities.data}/>)
            }
        </div>
    )
};

export default SearchCities;