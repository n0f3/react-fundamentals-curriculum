import React, {PropTypes} from 'react';

const NavBar = (props) => {
  return (
    <nav className='navbar navbar-default'>
      <div className='container-fluid'>
        <div className='navbar-header'>
          <span className='navbar-brand'>
            {props.title}
          </span>
        </div>
      </div>
    </nav>
  )
}

NavBar.propTypes = {
  title: PropTypes.string.isRequired
};

export default NavBar;
