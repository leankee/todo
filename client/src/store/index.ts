import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './user/user.slice';
import { homeReducer } from './home/home.slice';

export const store = configureStore({
	reducer: {
		user: userReducer,
		home: homeReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
