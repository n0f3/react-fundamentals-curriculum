import React, {PropTypes} from 'react';
import {getWeatherData} from '../helpers/WeatherApiHelper';
import moment from 'moment';

const ListItemWrapper = (props) => <li>{props.text}</li>

export default class GetWeatherContainer extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      locationName: '',
      weatherData: []
    }
  }

  componentDidMount() {
    getWeatherData(this.props.routeParams.location)
      .then((weatherObj) => {
        console.log(weatherObj);
        this.setState({
            locationName: weatherObj.cityName,
            weatherData: weatherObj.weatherData
        })
      });
  }

  render() {
    return (
      <div className='text-center'>
        <h1>{this.state.locationName}</h1>
        <ul>
          {
            this.state.weatherData.map((element) => {
              return (
                <ListItemWrapper key={element.date.unix()} text={element.date.format('ddd, MMMM Do')} />
              )
            })
          }
        </ul>
      </div>
    );
  }
}

GetWeatherContainer.propTypes = {
};
