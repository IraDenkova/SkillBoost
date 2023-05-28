import React from 'react'
import { Link } from "react-router-dom"
import styled from 'styled-components'

const LogoBox = styled.div`
  font-weight: 700;
  font-size: 26px;
  line-height: 32px;
  position: relative;
`

const Logo = () => {
  return (
    <LogoBox>
      <Link to='/'>SkillBoost</Link>
    </LogoBox>
  )
}

export default Logo
