import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Container, Button } from 'Common'
import dev from 'Static/illustrations/progress-tracking.svg'
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles'

export const Test1 = () => (
  <Wrapper id="about">
    <SkillsWrapper as={Container}>
      <Details>
        <h1>test</h1>
      </Details>
    </SkillsWrapper>
  </Wrapper>
)
