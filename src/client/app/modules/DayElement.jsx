import React, {PropTypes} from 'react';
import moment from 'moment';

const DayElement = props => {
  console.log(props.date);
  return (
      //Add image of weather here
        <h1>{props.date.format('ddd, MMMM Do')}</h1>
  );
};

DayElement.propTypes = {
  date: PropTypes.object.isRequired
};

export default DayElement;