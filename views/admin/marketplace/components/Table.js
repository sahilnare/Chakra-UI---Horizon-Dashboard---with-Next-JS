
import {
	Avatar,
	Box,
	Flex,
	Progress,
	Table,
	Tbody,
	Td,
	Text,
	Th,
	Thead,
	Tr,
	useColorModeValue
  } from "@chakra-ui/react";

  import {
	useGlobalFilter,
	usePagination,
	useSortBy,
	useTable,
  } from "react-table";

  function Tabled(props) {

	const { columnsData, tableData } = props;

	const tableInstance = useTable(
		{
		  // columns,
		  // data,
		  columns: columnsData,
		  data: tableData,
		},
		useGlobalFilter,
		useSortBy,
		usePagination
	  );

	const { getTableProps, getTableBodyProps, headerGroups, page, prepareRow } = tableInstance;

	const textColorSecondary = useColorModeValue("secondaryGray.600", "white");
	const textColor = useColorModeValue("navy.700", "white");

	
	return (
		<Table {...getTableProps()} variant='simple' color='gray.500'>
					<Thead>
					{headerGroups.map((headerGroup, index) => (
						<Tr {...headerGroup.getHeaderGroupProps()} key={index}>
						{headerGroup.headers.map((column, index) => (
							<Th
							{...column.getHeaderProps(column.getSortByToggleProps())}
							pe='10px'
							key={index}
							borderColor='transparent'>
							<Flex
								justify='space-between'
								align='center'
								fontSize={{ sm: "10px", lg: "12px" }}
								color='gray.400'>
								{column.render("Header")}
							</Flex>
							</Th>
						))}
						</Tr>
					))}
					</Thead>
		
					<Tbody {...getTableBodyProps()}>
					{page.map((row, index) => {
						prepareRow(row);
						return (
						<Tr {...row.getRowProps()} key={index}>
							{row.cells.map((cell, index) => {
							let data = "";
							if (cell.column.Header === "Name") {
								data = (
								<Flex align='center'>
									<Avatar
									src={cell.value[1]}
									w='30px'
									h='30px'
									me='8px'
									/>
									<Text
									color={textColor}
									fontSize='sm'
									fontWeight='600'>
									{cell.value[0]}
									</Text>
								</Flex>
								);
							} else if (cell.column.Header === "Artworks") {
								data = (
								<Text
									color={textColorSecondary}
									fontSize='sm'
									fontWeight='500'>
									{cell.value}
								</Text>
								);
							} else if (cell.column.Header === "Rating") {
								data = (
								<Box>
									<Progress
									variant='table'
									colorScheme='brandScheme'
									value={cell.value}
									/>
								</Box>
								);
							}
							return (
								<Td
								{...cell.getCellProps()}
								key={index}
								fontSize={{ sm: "14px" }}
								minW={{ sm: "150px", md: "200px", lg: "auto" }}
								borderColor='transparent'>
								{data}
								</Td>
							);
							})}
						</Tr>
						);
					})}
					</Tbody>
				</Table>
	)


  }


  export default Tabled;