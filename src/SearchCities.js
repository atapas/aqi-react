import React, { useState, useEffect, useRef } from 'react';

import { useAQIAPIs } from './useAQIAPIs';

import { TOKEN, SEARCH_CITIES_BASE_URL } from './AQIConst';

import CityAQIList from './CityAQIList';

const SearchCities = () => {
    const [url, setUrl] = useState('');
    const [cities , loading, initial, error] = useAQIAPIs(url);
    const [searchText, setSearchText] = useState('');
    const searchInput = useRef(null);

    useEffect(() => {
        searchInput.current.focus();
    }, []);
    
    const searchCityName = (event) => {
        event.preventDefault();
        setUrl(`${SEARCH_CITIES_BASE_URL}?token=${TOKEN}&keyword=${searchText}`);
    }

    const handleSearchTextChange = (event) => {
        setSearchText(event.target.value);
    }
    return(
        <div>
            { error }
            <form onSubmit={ e => searchCityName(e)}>
                <label>
                
                <input 
                    type="text" 
                    ref={ searchInput }
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
                    !initial && (<CityAQIList data={ cities.data }/>)
            }
        </div>
    )
};

export default SearchCities;