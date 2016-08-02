import React, {PropTypes} from 'react';
import {getWeatherData} from '../helpers/WeatherApiHelper';

export default class GetWeatherContainer extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    getWeatherData(this.props.routeParams.location);
  }

  render() {
    return (<div>MyComponent</div>);
  }
}

GetWeatherContainer.propTypes = {
};
