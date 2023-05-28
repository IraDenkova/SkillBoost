import React  from 'react'
import { Link } from "react-router-dom"
import styled from 'styled-components'

import { connect } from 'react-redux';

const Links = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  a + a {
    margin-left: 25px;
  }
  a {
    position: relative;
      &::after{
      content: '';
      height: 2px;
      width: 100%;
      background-color: #31764F;
      position: absolute;
      bottom: -2px;
      left: 0;
      opacity: 0;
      transform: translateY(200%);
      transition: ease-in-out .3s;
    }
  }
  a:hover::after{
    transition: ease-in-out .3s;
    opacity: 0.5;
    transform: translateY(0%);
  }
  a.active{
    &::after{
      opacity: 1;
      transform: translateY(0%);
    }
  }
`

const Menu = ({ active, setActive }) => {

  const handleLinkClick = (link) => {
    setActive(link);
  };

  return (
    <Links>
      <Link
        to='/'
        className={active === 'home' ? 'active' : ''}
        onClick={() => handleLinkClick('home')}>
        Home
      </Link>
      <Link
        to='/courses'
        className={active === 'courses' ? 'active' : ''}
        onClick={() => handleLinkClick('courses')}>
        Courses
      </Link>
      <Link
        to='/about'
        className={active === 'about' ? 'active' : ''}
        onClick={() => handleLinkClick('about')}>
        About Us
      </Link>
      <Link
        to='/contact'
        className={active === 'contact' ? 'active' : ''}
        onClick={() => handleLinkClick('contact')}>
        Contact Us
      </Link>
    </Links>
  )
}

const mapStateToProps = (state) => ({
  active: state.active
});

const mapDispatchToProps = (dispatch) => ({
  setActive: (link) => dispatch({ type: 'SET_ACTIVE', payload: link })
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
