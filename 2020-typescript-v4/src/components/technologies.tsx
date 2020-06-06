/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import React from 'react'
import technologiesJSON from '../utils/technologiesJSON.js'
import { Flex, Image, Box, Heading, useColorMode } from '@chakra-ui/core'
import { Section } from './section';
import { GradientHeading } from './gradientHeading';

export const Technologies = () => {

    let cdnUrl = 'https://cdn.jsdelivr.net/npm/simple-icons@v2/icons/'

    const { colorMode } = useColorMode();

    return (
        <Section>
            <GradientHeading size="md" mb={5} width="100%" >
                Technologies I've worked with
						{/* Web, UI & UX */}
            </GradientHeading>
            <Flex flexWrap="wrap" justifyContent="left">

                {technologiesJSON.map(el =>
                    <Flex flexDir="row" rounded={8} padding={3} m={1} key={el.displayName}
                        css={css`
                            img {
                                filter: invert(${colorMode === "light" ? 0 : 1});
                                opacity: .8;
                            }
                            /* color: white; */
                            font-weight: 500;
                            transition: all 0.3s ease;
                            box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.13);


                            &:hover {
                                transform: scale(1.02);
                            }
                    `}

                    >
                        <Image src={'data:image/svg+xml;utf8,' + el.svg} size="20px" mr={3}
                        />
                        {el.displayName}
                    </Flex>
                )}
            </Flex>
        </Section >
    )
}
