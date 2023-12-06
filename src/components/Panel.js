import React, { useState } from 'react';
import FeatureCards from './FeatureCards';
function Panel(props) {

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const [temperatue, settemperatue] = useState('f');
    const { locationName,
        country,
        weatherCondition,
        weatherIcon,
        tempFa,
        tempCe,
        windMph,
        humidity,
        forecastDays,
        dateString } = props;
    const now = new Date(dateString.split(' ')[0]);
    const options = { weekday: 'long' };
    const dayName = now.toLocaleDateString('en-US', options);
    return (
        <div>
            <div className="panel">
                <h2 className="city" id="city">{locationName}, {country}</h2>
                <div className="weather" id="weather">
                    <div className="group secondary">
                        <h3 id="dt">{dayName}, {dateString.split(' ')[1]}</h3>
                        <h3 id="description">{weatherCondition}</h3>
                    </div>
                    <div className="group secondary">
                        <h3 id="wind">Wind: {windMph} mph</h3>
                        <h3 id="humidity">Humidity {humidity}%</h3>
                    </div>
                    <div className="temperature" id="temperature">
                        <h1 className="temp" id="temp"><img src={weatherIcon} alt="" />
                            <span id="num">{`${temperatue === 'f' ? tempFa : tempCe}`}</span>
                            <a className={`fahrenheit ${temperatue === 'f' ? 'active' : ''}`} id="fahrenheit" href='/' onClick={(e) => { e.preventDefault(); settemperatue('f') }}>°F</a>
                            <span className="divider secondary">|</span><a className={`celsius ${temperatue === 'c' ? 'active' : ''}`} id="celsius" href='/' onClick={(e) => { e.preventDefault(); settemperatue('c') }}>°C</a></h1>
                    </div>
                    <FeatureCards temperatureUnit={temperatue} forcastDays={forecastDays} dayArray={days} />
                </div>
            </div>
        </div>
    );
}

Panel.defaultProps = {
    locationName: "",
    country: "",
    weatherCondition: "",
    weatherIcon: "",
    tempFa: "",
    tempCe: "",
    windMph: "",
    humidity: "",
    forecastDays: [],
}
export default Panel;
