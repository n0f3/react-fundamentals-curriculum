import React, {PropTypes} from 'react';
import NavBar from './NavBar';

const Main = (props) => {
  return (
    <div>
      <NavBar title='Weather App sample'/>
      <div className='container'>
        {props.children}
      </div>
    </div>
  )
}

export default Main;
