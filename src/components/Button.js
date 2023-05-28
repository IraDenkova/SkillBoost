import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { connect } from 'react-redux';

const ButtonLink = styled(Link)`
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: #fff;
  background-color: #31764F;
  border-radius: 60px;
  padding: 13px 40px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  border: 3px solid #31764F;
  transition: all .3s;
  &:hover{
    color: #31764F;
    background-color: #EBEBEB;
    border: 3px solid #31764F;
  }
`

const Button = ({ active, setActive }) => {

  const handleLinkClick = (link) => {
    setActive(link);
  };

  return (
    <div>
      <ButtonLink 
        to='/courses'
        className={active === 'courses' ? 'active' : ''}
        onClick={() => handleLinkClick('courses')}>
        Get Started
      </ButtonLink>
    </div>
  )
}

const mapStateToProps = (state) => ({
  active: state.active
});

const mapDispatchToProps = (dispatch) => ({
  setActive: (link) => dispatch({ type: 'SET_ACTIVE', payload: link })
});

export default connect(mapStateToProps, mapDispatchToProps)(Button);
