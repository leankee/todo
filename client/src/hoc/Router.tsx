import { FC, ReactNode } from 'react';
import { Navigate, Route, Routes, useLocation, useSearchParams } from 'react-router-dom';
import Home from '../pages';
import SignIn from '../pages/sign-in';
import { useAppSelector } from '../hooks/redux';
import { Layout } from './Layout';
import { ResultNotFound } from '../components/Result/NotFound';
import { ResultDeveloping } from '../components/Result/Developing';

interface IRoute {
	path: string;
	element: ReactNode;
}

export enum RouteNames {
	HOME = '/',
	CALENDAR = '/calendar',
	NOTES = '/notes',
	TASK = '/task/:task_id',
	FAVOURITES = '/favourites',
	GROUP = '/group/:group_id',
	SIGN_IN = '/sign-in',
	SIGN_UP = '/sign-up',
	NOT_FOUND = '*',
}

export enum PageNames {
	HOME = 'Главная',
	CALENDAR = 'Календарь',
	NOTES = 'Заметки',
	FAVOURITES = 'Избранное',
	SIGN_IN = 'Вход в аккаунт',
	SIGN_UP = 'Регистрация',
}

const authRoutes: IRoute[] = [
	{
		path: RouteNames.SIGN_IN,
		element: <SignIn/>,
	},
	{
		path: RouteNames.SIGN_UP,
		element: <ResultDeveloping/>,
	},
];

const privateRoutes: IRoute[] = [
	{
		path: RouteNames.HOME,
		element: <Home/>,
	},
	{
		path: RouteNames.TASK,
		element: <ResultDeveloping/>,
	},
	{
		path: RouteNames.CALENDAR,
		element: <ResultDeveloping/>,
	},
	{
		path: RouteNames.NOTES,
		element: <ResultDeveloping/>,
	},
	{
		path: RouteNames.FAVOURITES,
		element: <ResultDeveloping/>,
	},
	{
		path: RouteNames.GROUP,
		element: <ResultDeveloping/>,
	},
];

export const Router: FC = () => {
	const { data: user } = useAppSelector(state => state.user);
	const location = useLocation();
	const [searchParams] = useSearchParams();
	const redirect = searchParams.get('return_to');

	return (
		<Routes>
			{user
				? (
					<Route path={RouteNames.HOME} element={<Layout/>}>
						{privateRoutes.map(route => (
							<Route
								key={route.path}
								path={route.path}
								element={route.element}
							/>
						))}
						{authRoutes.map(route => (
							<Route
								key={route.path}
								path={route.path}
								element={<Navigate to={redirect || RouteNames.HOME} replace/>}
							/>
						))}
						<Route path={RouteNames.NOT_FOUND} element={<ResultNotFound/>}/>
					</Route>
				) : (
					<>
						{authRoutes.map(route => (
							<Route
								key={route.path}
								path={route.path}
								element={route.element}
							/>
						))}
						{privateRoutes.map(route => (
							<Route
								key={route.path}
								path={route.path}
								element={<Navigate to={`${RouteNames.SIGN_IN}?return_to=${location.pathname}`} replace/>}
							/>
						))}
						<Route path={RouteNames.NOT_FOUND} element={<ResultNotFound/>}/>
					</>
				)
			}
		</Routes>
	);
};