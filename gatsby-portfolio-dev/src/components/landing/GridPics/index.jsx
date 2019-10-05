import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Header } from 'Theme'
import { Container, Button } from 'Common'
import dev from 'Static/illustrations/dev.svg'
import {
  Item1,
  Item2,
  Item3,
  Item4,
  Item5,
  PicContainer,
  Wrapper,
  IntroWrapper,
} from './styles'
import Tilt from 'react-tilt'

const tiltOptions = {
  reverse: true, // reverse the tilt direction
  max: 25, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.05, // 2 = 200%, 1.5 = 150%, etc..
  speed: 300, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: 'cubic-bezier(.03,.98,.52,.99)', // Easing on enter/exit.
}

export const GridPics = () => (
  <Wrapper>
    <Header />
    <IntroWrapper as={Container}>
      <PicContainer>
        <Item1 options={tiltOptions}>
          <p>J</p>
        </Item1>
        <Item2 options={tiltOptions}>
          <p>O</p>
        </Item2>
        <Item3 options={tiltOptions}>
          <p>R</p>
        </Item3>
        <Item4 options={tiltOptions}>
          <p>D</p>
        </Item4>
        <Item5 options={tiltOptions}>
          <p>I</p>
        </Item5>
      </PicContainer>
    </IntroWrapper>
  </Wrapper>
)
