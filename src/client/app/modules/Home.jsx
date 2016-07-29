import React, {PropTypes} from 'react';
import SearchWidgetContainer from '../containers/SearchWidgetContainer';
import '../styles/main.scss';

const Home = (props) => {
  return (
    <div className='home-container'>
      <div className='container text-center'>
        <h1>Enter a City and State</h1>
        <SearchWidgetContainer />
      </div>
    </div>
  )
}

export default Home;
