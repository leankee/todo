import { IUser } from '../../models';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
	data: IUser | null;
	token: string | null;
}

const token = localStorage.getItem('user-token');

const initialState: UserState = {
	data: token ? JSON.parse(token) : null, // Изменить
	token,
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		login: (state, action: PayloadAction<string>) => {
			state.data = JSON.parse(action.payload); // Изменить
			state.token = action.payload;
			localStorage.setItem('user-token', action.payload);
		},
		logout: (state) => {
			state.data = null;
			state.token = null;
			localStorage.removeItem('user-token');
		},
	},
});

export const userActions = userSlice.actions;
export const userReducer = userSlice.reducer;
