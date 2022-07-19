

import {
	Button,
	Flex,
	Text,
	useColorModeValue,
  } from "@chakra-ui/react";
  import { useMemo, useEffect,  useState } from "react";
  

  import Tabled from "./Table";

  
  function TopCreatorTable(props) {

	const [tableMounted, setTableMounted] = useState(false);
	const [columnsDataRen, setColumnsData] = useState(null);
	const [tableDataRen, setTableData] = useState(null);

	useEffect(() => {
		const { columnsData, tableData } = props;
		setColumnsData(columnsData);
		setTableData(tableData);
		setTableMounted(true);
	}, [props]);

	
  
	const textColor = useColorModeValue("navy.700", "white");
	
  
	return (
	  <>
		<Flex
		  direction='column'
		  w='100%'
		  overflowX={{ sm: "scroll", lg: "hidden" }}>
		  <Flex
			align={{ sm: "flex-start", lg: "center" }}
			justify='space-between'
			w='100%'
			px='22px'
			pb='20px'
			mb='10px'
			boxShadow='0px 40px 58px -20px rgba(112, 144, 176, 0.26)'>
			<Text color={textColor} fontSize='xl' fontWeight='600'>
			  Top Creators
			</Text>
			<Button variant='action'>See all</Button>
		  </Flex>
		  {
			tableMounted ? (
				<Tabled columnsData={columnsDataRen} tableData={tableDataRen}/>
			) : <p>Loading</p>
		  }
		  
		</Flex>
	  </>
	);
  }
  
  export default TopCreatorTable;
  