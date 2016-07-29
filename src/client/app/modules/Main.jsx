import React, {PropTypes} from 'react';
import NavBar from './NavBar';

const Main = (props) => {
  return (
    <NavBar title='Weather App sample'>
      {props.children}
    </NavBar>
  )
}

export default Main;
