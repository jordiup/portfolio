import React, { useState } from 'react';
import { Flex, Box, Tooltip, Input, Text } from '@chakra-ui/core';
import { differenceInWeeks } from 'date-fns';

interface Props {}

const test = (props: Props) => {
	let weekCount = 52;
	let yearCount = 90;

	const [bday, setBday] = useState(new Date('1/1/2000'));
	const today = new Date();

	const diff = differenceInWeeks(today, bday);

	let createTable = () => {
		let table = [];
		let currentWeek = 0;

		// Outer loop to create parent
		for (let i = 0; i < yearCount; i++) {
			let children = [];
			//Inner loop to create children
			for (let j = 0; j < weekCount; j++) {
				currentWeek++;
				children.push(
					<Tooltip
						label={'Week ' + j + ',' + (bday.getFullYear() + i)}
						key={'' + j + i}
					>
						<Box
							bg={currentWeek <= diff ? 'black' : 'grey'}
							m={1 / 2}
							rounded="2px"
							size="12px"
							key={'' + j + i}
							// outline="1px solid rgba(27,31,35,.04)"
						></Box>
					</Tooltip>
				);
			}
			//Create the parent and add the children
			table.push(
				<Flex dir="row" key={i}>
					{children}
				</Flex>
			);
		}
		return table;
	};

	return (
		<Box p={9}>
			<Input
				w={180}
				type="date"
				placeholder="Enter your birth date"
				onChange={(e) => setBday(new Date(e.target.value))}
			/>
			{/* <Box>{today - bday}</Box>
			<Box>{diff}</Box> */}
			<Box p={9} mx={15} position="relative">
				<Text>Week of the year </Text>
				<Text
					// position="relative"
					transform="rotate(-90deg)"
					position=" absolute"
					top="80px"
					left="-60px"
				>
					Year of your life
				</Text>
				{createTable()}
			</Box>
		</Box>
	);
};

export default test;
