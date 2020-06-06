import React from 'react'
import styled from '@emotion/styled'
import { Heading, HeadingProps, useColorMode } from '@chakra-ui/core'

export const GradientHeading = (props) => {



  const { colorMode } = useColorMode()
  let col = colorMode === "light" ? "#212121" : "#fff"


  const StyledHeading = styled(Heading)`
    transition: all 0.4s ease;
    &:hover {
      background: linear-gradient(
        49deg,
        #20bf55,
        #01baef,
        ${col},
        ${col},
        ${col}
      );
      background-size: 1000% 1000%;
      /* transform: scale(1.02); */
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: AnimationName 3s ease infinite;
      @keyframes AnimationName {
        0% {
          background-position: 0% 46%;
        }
        50% {
          background-position: 100% 55%;
        }
        100% {
          background-position: 0% 46%;
        }
    }
  }
    `

  return (
    <StyledHeading {...props}>
      {props.children}
    </StyledHeading>
  )
}
