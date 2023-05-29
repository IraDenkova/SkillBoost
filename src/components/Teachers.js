import React, { useState } from 'react'

import teacherOne from '../assets/PavelDanilyuk.jpg'
import teacherTwo from '../assets/ChristinaMorillo.jpg'
import teacherThree from '../assets/EdmondDantes.jpg'
import styled from 'styled-components'

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 500;
`
const Image = styled.div`
  width: 100px;
  height: 440px;
  background-position: center center;
  border-radius: 10px;
  transition: all 1s;
  box-shadow: rgba(0, 0, 0, 0.4) 0px -170px 30px inset;
  &.full-width{
    width: 300px !important;
    transition: all .7s;
  }
`
const Description = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  color: #fff;
  font-size: 24px;
  line-height: 28px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px;
  opacity: 0;
  transition: all .4s;
  width: 100%;
  &.visible{
    opacity: 1;
    transition: all .7s .2s;
  }
  & + & {
    padding-left: 60px;
  }
`
const Topics = styled.p`
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  span{
    font-size: 32px;
    line-height: 34px;
    display: block;
  }
`
const Title = styled.span`
  position: absolute;
  bottom: 40px;
  left: 52px;
  color: #fff;
  font-size: 28px;
  line-height: 32px;
  opacity: 0;
  transition: all .2s;
  transform: rotate(-90deg);
  height: 120px;
  width: 120px;
  &.visible-title{
    opacity: 1;
    transition: all .3s;
  }
`

const Teachers = () => {

  const [hovered, setHovered] = useState(0)

  const handleMouseEnter = (index) => {
    setHovered(index);
  }

  const handleMouseLeave = () => {
    setHovered(0);
  }

  return (
    <Box>
      <div
        style={{ position: 'relative' }}
        onMouseEnter={() => handleMouseEnter(0)}
        onMouseLeave={handleMouseLeave}>
        <Image
          style={{ backgroundImage: `url(${teacherOne})` }}
          className={hovered === 0 ? 'full-width' : ''}>
        </Image>
        <Description className={hovered === 0 ? 'visible' : ''}>
          <p>American Literature</p>
          <Topics><span>90</span>TOPICS</Topics>
        </Description>
      </div>
      <div
        style={{ paddingLeft: '20px', position: 'relative' }}
        onMouseEnter={() => handleMouseEnter(1)}
        onMouseLeave={handleMouseLeave}>
        <Image
          style={{ backgroundImage: `url(${teacherTwo})` }}
          className={hovered === 1 ? 'full-width' : ''}>
        </Image>
        <Title className={hovered === 1 ? '' : 'visible-title'}>Science</Title>
        <Description
          style={{ paddingLeft: '60px' }} className={hovered === 1 ? 'visible' : ''}>
          <p>Science</p>
          <Topics><span>45</span>TOPICS</Topics>
        </Description>
      </div>
      <div
        style={{ paddingLeft: '20px', position: 'relative' }}
        onMouseEnter={() => handleMouseEnter(2)}
        onMouseLeave={handleMouseLeave}>
        <Image
          style={{ backgroundImage: `url(${teacherThree})` }}
          className={hovered === 2 ? 'full-width' : ''}>
        </Image>
        <Title className={hovered === 2 ? '' : 'visible-title'}>Accounting</Title>
        <Description
          style={{ paddingLeft: '60px' }} className={hovered === 2 ? 'visible' : ''}>
          <p>Accounting</p>
          <Topics><span>70</span>TOPICS</Topics>
        </Description>
      </div>
    </Box>
  )
}

export default Teachers
