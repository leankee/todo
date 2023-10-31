import { Link } from 'react-router-dom';
import { PageNames, RouteNames } from '../hoc/Router';

const Home = () => {
	return (
		<div>
			<h1>{PageNames.HOME}</h1>
			<Link to={RouteNames.SIGN_IN}>{PageNames.SIGN_IN}</Link>
		</div>
	);
};

export default Home;