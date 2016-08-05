import React, {PropTypes} from 'react';

const DayElement = props => {
  return (
      //Add image of weather here
        <li>{props.formattedDate}</li>
  );
};

DayElement.propTypes = {
  formattedDate: PropTypes.string.isRequired
};

export default DayElement;