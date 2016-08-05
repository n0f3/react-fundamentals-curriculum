import React, {Component} from 'react';
import {WeatherDetail} from '../modules/WeatherDetail';

class WeatherDetailContainer extends Component {
  constructor(props, context) {
    super(props, context);

  }

  componentDidMount() {
    console.log(this.props.location);
  }

  render() {
    return (
      <WeatherDetail />
    );
  }
}

export default WeatherDetailContainer;