import axios from 'axios';
import moment from 'moment';

const API_KEY = '02da6f10a10d89d3cf2f42b249703986';

const parseParams = (cityInput) => cityInput.split(',');

const getWeatherData = (input) => {
  const params = parseParams(input);
  const weatherEndPoint = 'http://api.openweathermap.org/data/2.5/forecast/daily';
  const query = {q: params.join(','), cnt: 5, APIKEY: API_KEY};
  return axios.get(weatherEndPoint, {
    params: query
  })
  .then(
    (response) => {
      const data = response.data;
      console.log(data);
      let returnObj = {};
      returnObj.cityName = data.city.name;
      returnObj.weatherData = data.list.map((element) => {
        return {
          date: moment.unix(element.dt),
          weatherDescription: element.weather[0].description,
          weatherId: element.weather[0].id,
          minTemp: element.temp.min,
          maxTemp: element.temp.max,
          humidity: element.humidity
        }
      });
      return returnObj;
    })
  .catch((error) => console.log(`There was an error trying to retrieve weather data, message is: ${error}`));
}

export {getWeatherData};
