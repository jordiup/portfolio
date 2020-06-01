import React from 'react';
// import AnchorLink from 'react-anchor-link-smooth-scroll'
import styled from '@emotion/styled';
import { Box, Heading } from '@chakra-ui/core';
import { Button } from './button';
import { Section } from './section';
// import dev from 'Static/illustrations/progress-tracking.svg'

export const Wrapper = styled(Box)`
	/* background-image: url('../illustrations/details.svg'); */
	background-size: contain;
	background-position: left top;
	background-repeat: no-repeat;
`;

export const SkillsWrapper = styled(Box)`
	padding: 4rem 0;
	display: flex;
	align-items: center;
	justify-content: space-between;

	@media (max-width: 960px) {
		flex-direction: column;
	}
`;

export const Details = styled(Box)`
	flex: 1;
	/* padding-left: 2rem; */

	@media (max-width: 960px) {
		padding-left: unset;
		width: 100%;
	}

	/* h1 {
		margin-bottom: 2rem;
		font-size: 26pt;
		color: #212121;
	} */

	/* p {
		margin-bottom: 2.5rem;
		font-size: 20pt;
		font-weight: normal;
		line-height: 1.3;
		color: #707070;
	} */
`;

export const Thumbnail = styled(Box)`
	flex: 1;

	@media (max-width: 960px) {
		width: 80%;
		margin-bottom: 2rem;
	}

	img {
		width: 80%;
	}
`;

export const ResumeDownload = props => {
	const { ...rest } = props;

	return (
		<Section id="resume">
			<Wrapper id="about" {...rest}>
				<SkillsWrapper>
					{/* <Thumbnail>
				<img src={dev} alt="I’m Jordi and I’m a frontend engineer!" />
			</Thumbnail> */}
					<Details>
						<Heading as="h1">Resume</Heading>
						<Heading as="h2" color="#707070" size="lg" mt={3} fontWeight="500">
							Download my latest resume to see my experiences.
						</Heading>

						<Button
							as="a"
							mt={6}
							href="https://drive.google.com/open?id=1nulEXvdBl0egaAmG7t1ixQjNhOyMomk5"
							target="_blank"
							className="darkmode-ignore"
						>
							Download
						</Button>
					</Details>
				</SkillsWrapper>
			</Wrapper>
		</Section>
	);
};
