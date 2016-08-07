import React, {Component} from 'react';
import {WeatherDetail} from '../modules/WeatherDetail';
import DayElement from '../modules/DayElement';
import moment from 'moment';

class WeatherDetailContainer extends Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    console.log(this.props.location.state);
  }

  render() {
    return (
      <div className='text-center weather-detail'>
        <DayElement date={moment(this.props.location.state.date)}/>
        <WeatherDetail humidity={this.props.location.state.humidity} maxTemp={this.props.location.state.maxTemp}
        minTemp={this.props.location.state.minTemp} weatherDescription={this.props.location.state.weatherDescription}/>
      </div>
    );
  }
}

export default WeatherDetailContainer;