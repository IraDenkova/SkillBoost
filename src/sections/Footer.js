import React, { useState } from 'react'
import styled from 'styled-components'
import Facebook from '../assets/Facebook'
import Instagram from '../assets/Instagram'
import Linkedin from '../assets/Linkedin'
import Twitter from '../assets/Twitter'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  margin: 0 auto;
  padding: 20px 0;
`
const LinksBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  a + a {
    margin-left: 12px;
  }
`
const SocialLink = styled.a`
  svg{
    transition: fill .3s;
  }
  svg:hover{
    fill: #31764F;
  }
`

const Footer = () => {

  const date = new Date().getFullYear()

  const socialLinks = [
    { url: 'https://www.facebook.com', icon: <Facebook /> },
    { url: 'https://www.instagram.com', icon: <Instagram /> },
    { url: 'https://www.linkedin.com', icon: <Linkedin /> },
    { url: 'https://twitter.com', icon: <Twitter /> }
  ]

  return (
    <Container>
      <span>&copy; {date} SkillBoost. All rights reserved.</span>
      <LinksBox>
        {socialLinks.map((link, index) => (
          <SocialLink key={index} href={link.url}>
            {link.icon}
          </SocialLink>
        ))}
      </LinksBox>
    </Container>
  )
}

export default Footer
