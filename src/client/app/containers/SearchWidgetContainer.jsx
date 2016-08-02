import React, {PropTypes} from 'react';
import {SearchWidget} from '../modules/SearchWidget';
import WeatherApiHelper from '../helpers/WeatherApiHelper';

export default class SearchWidgetContainer extends React.Component {
  static contextTypes = {
    router: PropTypes.object.isRequired
  }
  constructor(props, context) {
    super(props, context);
    this.state = {
      defaultCity: 'San Francisco, CA',
      city: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleCitySubmit = this.handleCitySubmit.bind(this);
    this.resetState = this.resetState.bind(this);
  }
  handleChange(e) {
    this.setState({
      city: e.target.value
    });
  }

  resetState() {
    this.setState({
      city: ''
    })
  }

  handleCitySubmit(e) {
    e.preventDefault();
    const toSend = this.state.city || this.state.defaultCity;
    this.resetState();
    this.context.router.push(`/getWeather/${toSend}`);
  }

  render() {
    return (
      <SearchWidget
        defaultCity={this.state.defaultCity}
        city={this.state.city}
        handleChange={this.handleChange}
        handleCitySubmit={this.handleCitySubmit}
        navbarBtnOverride={this.props.navbarBtnOverride}
        navbarTxtOverride={this.props.navbarTxtOverride}
      />
      )
  }
}

SearchWidgetContainer.propTypes = {
};
