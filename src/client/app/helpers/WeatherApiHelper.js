import axios from 'axios';

const API_KEY = '02da6f10a10d89d3cf2f42b249703986';

const parseParams = (cityInput) => cityInput.split(',');


const getWeatherData = (input) => {
  const params = parseParams(input);
  const weatherEndPoint = 'api.openweathermap.org/data/2.5/weather';
  const query = {q: params.join(',')};
}
