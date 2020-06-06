/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import React from 'react';
import { Box, Heading, Flex, Text, Button, Link } from '@chakra-ui/core';
import { GradientHeading } from './gradientHeading';

const MenuItems = ({ children }) => (
	<Link
		// mt={{ base: 4, md: 0 }}
		mr={6}
		display="block"
		fontFamily="Eczar"
		href={'#' + children.toString().toLowerCase()}
		css={css`
			text-decoration: none;
			transition: all 0.2s ease;
			&:hover {
				transform: scale(1.02);
				text-decoration: none;
			}
		`}
	>
		{children}
	</Link>
);

export const Header = props => {
	const [show, setShow] = React.useState(false);
	const handleToggle = () => setShow(!show);

	return (
		<Flex as="nav" flexDirection="row" wrap="wrap" padding="1.5rem" {...props}>
			<Flex align="center" mr={5}>
				<Link href="/"
					css={css`
						&:hover {
						text-decoration: none;
						}
					`}

				>
					<GradientHeading
						as="h1"
						size="lg"
						pr={2}
						letterSpacing={'-.1rem'}
					>
						Jordi Hermoso
					</GradientHeading>
				</Link>
			</Flex>

			<Flex alignItems="center"
				// ml={0}
				ml={{ xs: 0, sm: "auto" }}
			// ml={["auto", "0", "0", "0"]}
			>
				<MenuItems>About</MenuItems>
				<MenuItems>Projects</MenuItems>
				<MenuItems>Resume</MenuItems>
			</Flex>

			{/* <Box
				display={{ sm: show ? 'block' : 'none', md: 'block' }}
				mt={{ base: 4, md: 0 }}
			>
				<Button bg="transparent" border="1px">
					Create account
				</Button>
			</Box> */}
		</Flex>
	);
};

// export default Header;
