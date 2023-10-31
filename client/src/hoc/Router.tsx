import { FC, ReactNode } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages';
import SignIn from '../pages/sign-in';

interface IRoute {
	path: string;
	element: ReactNode;
}

export enum RouteNames {
	HOME = '/',
	SIGN_IN = '/sign-in',
}

export enum PageNames {
	HOME = 'Главная',
	SIGN_IN = 'Вход в аккаунт',
}

const authRoutes: IRoute[] = [
	{
		path: RouteNames.SIGN_IN,
		element: <SignIn/>,
	},
];

const publicRoutes: IRoute[] = [
	{
		path: RouteNames.HOME,
		element: <Home/>,
	},
];

export const Router: FC = () => {
	return (
		<Routes>
			{publicRoutes.map(route => <Route key={route.path} path={route.path} element={route.element}/>)}
			{authRoutes.map(route => <Route key={route.path} path={route.path} element={route.element}/>)}
		</Routes>
	);
};