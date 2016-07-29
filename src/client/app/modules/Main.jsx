import React, {PropTypes} from 'react';
import NavBar from './NavBar';
import '../styles/main.scss';

const Main = (props) => {
  return (
    <div className='main-container'>
      <NavBar title='Weather App sample'/>
      {props.children}
    </div>
  )
}

export default Main;
