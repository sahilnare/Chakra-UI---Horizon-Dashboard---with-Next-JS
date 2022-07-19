
import Head from 'next/head';
import Dashboard from '../../layouts/admin';
import UserReports from '../../views/admin/default';


export default function MainDashboard() {

	return (
		<>
			<Head>
				<title>Main Dashboard</title>
			</Head>
			<Dashboard>

				<UserReports />

			</Dashboard>
		</>
	);
	
}