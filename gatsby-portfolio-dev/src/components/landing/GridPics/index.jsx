import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Header } from 'Theme'
import { Container, Button } from 'Common'
import dev from 'Static/illustrations/dev.svg'
import { Item1, Item2, Item3, Item4, Item5, 
	PicContainer, Wrapper, IntroWrapper, Details, Thumbnail } from './styles'



export const GridPics = () => (
	<Wrapper>
		<Header />
		<IntroWrapper as={Container}>

    <PicContainer>

			<Item1><p>J</p></Item1>
			<Item2><p>O</p></Item2>
			<Item3><p>R</p></Item3>
			<Item4><p>D</p></Item4>
			<Item5><p>I</p></Item5>
		
    </PicContainer>

		</IntroWrapper>
	</Wrapper>
)
