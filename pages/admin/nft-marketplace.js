
import Head from 'next/head';
import Dashboard from '../../layouts/admin';
import Marketplace from '../../views/admin/marketplace';


export default function NFTMarketPlace() {

	return (
		<>
			<Head>
				<title>NFT Marketplace</title>
			</Head>
			<Dashboard>

				<Marketplace />

			</Dashboard>
		</>
	);
	
}