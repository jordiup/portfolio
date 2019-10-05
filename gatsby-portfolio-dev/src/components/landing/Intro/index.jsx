import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Header } from 'Theme'
import { Container, Button } from 'Common'
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles'

export const Intro = () => (
  <Wrapper as={Container} id="intro">
    <h2>About</h2>
    <p>
      I'm a Frontend Developer specializing in React. I've just graduated with a
      Computer Science degree. I have a strong passion for software development,
      design and data analysis. As well as the way these can impact people and
      businesses around the world. I'm hardworking, and always interested in
      learning something new.
    </p>
  </Wrapper>
)
