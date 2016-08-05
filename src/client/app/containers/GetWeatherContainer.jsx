import React, {PropTypes} from 'react';
import ReactRouter, {Link} from 'react-router';
import {getWeatherData} from '../helpers/WeatherApiHelper';
import Loading from '../modules/Loading';
import DayElement from '../modules/DayElement';
import moment from 'moment';

export default class GetWeatherContainer extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      locationName: '',
      loading: true,
      weatherData: []
    }
  }

  componentDidMount() {
    getWeatherData(this.props.routeParams.location)
      .then((weatherObj) => {
        console.log(weatherObj);
        this.setState({
            locationName: weatherObj.cityName,
            weatherData: weatherObj.weatherData,
            loading: false
        })
      });
  }

  render() {
    return (
      this.state.loading ? <Loading /> :
      <div className='text-center'>
        <h1>{this.state.locationName}</h1>
        <ul>
          {
            this.state.weatherData.map((element) => {
              console.log(element);
              return (
                <Link key={element.date.unix()} to='/detail' state={element}>
                  <DayElement  formattedDate={element.date.format('ddd, MMMM Do')}/>
                </Link>
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
