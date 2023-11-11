import { useDispatch } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import { userActions } from '../store/user/user.slice';
import { homeActions } from '../store/home/home.slice';

const actions = {
	...userActions,
	...homeActions,
};

export const useActions = () => {
	const dispatch = useDispatch();
	return bindActionCreators(actions, dispatch);
};
