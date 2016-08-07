import React, {PropTypes} from 'react';

export const WeatherDetail = (props) => {
  return (
      <ul>
        <li>{`Humidity:${props.humidity}`}</li>
        <li>{`Min Temp:${props.maxTemp}`}</li>
        <li>{`Max Temp:${props.maxTemp}`}</li>
        <li>{`Status:${props.weatherDescription}`}</li>
      </ul>
  );
}

WeatherDetail.propTypes = {
  humidity: PropTypes.number.isRequired,
  maxTemp: PropTypes.number.isRequired,
  minTemp: PropTypes.number.isRequired,
  weatherDescription: PropTypes.string.isRequired
};
