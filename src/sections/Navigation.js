import React from 'react'
import Logo from '../components/Logo'
import Menu from '../components/Menu'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  margin: 0 auto;
  padding: 20px 0;
`

const Navigation = () => {
  return (
    <Container>
      <Logo />
      <Menu />
    </Container>
  )
}

export default Navigation
