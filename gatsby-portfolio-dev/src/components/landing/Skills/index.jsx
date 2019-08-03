import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Container, Button } from 'Common'
import dev from 'Static/illustrations/progress-tracking.svg'
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles'

export const Skills = () => (
	<Wrapper id="about">
		<SkillsWrapper as={Container}>
			<Thumbnail>
				<img src={dev} alt="I’m John and I’m a Backend & Devops engineer!" />
			</Thumbnail>
			<Details>
				<h1>Resume</h1>
				<p>
					Download my latest resume to see my experiences.
				</p>

				<Button href="https://drive.google.com/open?id=1nulEXvdBl0egaAmG7t1ixQjNhOyMomk5" target="_blank" className="darkmode-ignore">
					Download
				</Button>

			</Details>
		</SkillsWrapper>
	</Wrapper>
)
