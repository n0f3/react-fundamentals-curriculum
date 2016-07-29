import React, {PropTypes} from 'react';

export const SearchWidget = (props) => {
  return (
    <div>
      <input type='text' placeholder={props.defaultCity} value={props.city} onChange={props.handleChange}/>
      <button type='button' className='btn btn-success' onClick={props.handleCitySubmit}>Get Weather!</button>
    </div>
  );
}

SearchWidget.propTypes = {
  defaultCity: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleCitySubmit: PropTypes.func.isRequired
};
