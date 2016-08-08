import React, {PropTypes} from 'react';
import moment from 'moment';

const DayElement = props => {
  console.log(props.date);
  return (
      //Add image of weather here
        <p>{props.date.format('ddd, MMMM Do')}</p>
  );
};

DayElement.propTypes = {
  date: PropTypes.object.isRequired
};

export default DayElement;