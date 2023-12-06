import React from 'react';

function FeatureCards(props) {
    const { forcastDays, temperatureUnit, dayArray } = props;
    const today = new Date();
    const currentDayIndex = today.getDay();

    return (
        <div className="forecast" id="forecast">
            {forcastDays.map((element, index) => {
                return (
                    <div className="block" key={index}>
                        <h3 className="secondary">{dayArray[(currentDayIndex + (index + 1)) % 7].slice(0, 3)}</h3>
                        <h2 className="high">{temperatureUnit === 'c' ? element.day.maxtemp_c : element.day.maxtemp_f}</h2>
                        <h4 className="secondary">{temperatureUnit === 'c' ? element.day.mintemp_c : element.day.mintemp_f}</h4>
                    </div>
                )
            })}
        </div>
    );
}

export default FeatureCards;
