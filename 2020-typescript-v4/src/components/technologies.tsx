/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import React from 'react'
import technologiesJSON from '../utils/technologiesJSON.js'
import { Flex, Image, Box, Heading } from '@chakra-ui/core'
import { Section } from './section';

export const Technologies = () => {

    let cdnUrl = 'https://cdn.jsdelivr.net/npm/simple-icons@v2/icons/'
    console.log(technologiesJSON)
    // technologiesJSON.map(el => console.log(el.key))

    return (
        <Section my={6 * 2}>
            <Heading size="md" mb={5} width="100%" >
                Technologies
						{/* Web, UI & UX */}
            </Heading>
            <Flex flexWrap="wrap" justifyContent="left">

                {technologiesJSON.map(el =>
                    <Flex flexDir="row" rounded={8} padding={3} m={1}
                        css={css`
                            img {
                                /* filter: invert(1) */
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
