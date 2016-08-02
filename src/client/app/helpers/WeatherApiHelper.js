import axios from 'axios';

const API_KEY = '02da6f10a10d89d3cf2f42b249703986';

const parseParams = (cityInput) => cityInput.split(',');

const getWeatherData = (input) => {
  const params = parseParams(input);
  const weatherEndPoint = 'http://api.openweathermap.org/data/2.5/weather';
  const query = {q: params.join(','), APIKEY: API_KEY};
  return axios.get(weatherEndPoint, {
    params: query
  })
  .then(
    (response) => {
      console.log(response.data);
      console.log(response.status);
      console.log(response.statusText);
      console.log(response.headers);
      console.log(response.config);
    })
  .catch((error) => console.log(error));
}

export {getWeatherData};
