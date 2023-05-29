import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import Teachers from './Teachers'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 100px;
`
const Title = styled.h1`
  font-weight: 700;
  font-size: 55px;
  line-height: 67px;
  margin-bottom: 60px;
  max-width: 205px;
`

const Header = () => {
  return (
    <Container>
      <div>
        <Title>
          Watch.
          Learn.
          Grow.
        </Title>
        <Button />
      </div>
      <div>
        <Teachers />
      </div>
    </Container>
  )
}

export default Header
