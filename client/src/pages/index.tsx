import { Link } from 'react-router-dom';
import { PageNames, RouteNames } from '../hoc/Router';
import { Button } from 'antd';
import { useActions } from '../hooks/actions';
import { Page } from '../hoc/Page';

const Home = () => {
	const { logout } = useActions();

	const handleClick = () => {
		logout();
	};

	return (
		<Page header={{ title: PageNames.HOME.toUpperCase() }}>
			<Link to={RouteNames.SIGN_IN}>{PageNames.SIGN_IN}</Link>
			<Button onClick={handleClick}>Выйти из аккаунта</Button>
		</Page>
	);
};

export default Home;