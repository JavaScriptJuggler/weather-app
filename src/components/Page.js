import React, { useEffect, useState } from 'react';
import Panel from './Panel';
import Spinner from './Spinner';
function Page() {
    const [apiResponse, setApiResponse] = useState({});
    const [searchPlace, setsearchPlace] = useState('kolkata');
    const [loading, setloading] = useState(true);
    const numberOfDays = 5;

    /* fetch data from api */
    const fetchData = async () => {
        setloading(true);
        await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=${searchPlace}&days=${numberOfDays}&aqi=no&alerts=no`)
            .then(async (response) => {
                let getResponse = await response.json();
                setApiResponse(getResponse)
                setloading(false);
            })
            .catch(error => console.log(error));
    }

    /* get weather update from search */
    const getWeatherUpdate = (e) => {
        e.preventDefault();
        fetchData();
    }
    /* on mount */
    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div>
            {loading && <Spinner />}
            <div className="wrapper">
                <search>
                    <input className="searchbar transparent" id="search" type="text" value={searchPlace} onChange={(e) => { setsearchPlace(e.target.value) }} placeholder="enter city, country" onKeyUp={(e) => { e.preventDefault(); e.key === 'Enter' && getWeatherUpdate(e) }} />
                </search>

                {apiResponse.location && apiResponse.current && (
                    <Panel
                        locationName={apiResponse.location.name}
                        country={apiResponse.location.country}
                        weatherCondition={apiResponse.current.condition.text}
                        weatherIcon={apiResponse.current.condition.icon}
                        tempFa={apiResponse.current.temp_f}
                        tempCe={apiResponse.current.temp_c}
                        windMph={apiResponse.current.wind_mph}
                        humidity={apiResponse.current.humidity}
                        forecastDays={apiResponse.forecast.forecastday}
                        dateString={apiResponse.location.localtime}
                    />

                )}
            </div>
        </div>
    );
}

export default Page;
