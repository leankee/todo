import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import dayjs from 'dayjs';
import { dateAPIFormat } from '../../utils';

interface HomeState {
	params: {
		date: string;
		page: number;
	};
	grid: boolean;
}

const gridStorage = localStorage.getItem('grid');

const initialState: HomeState = {
	params: {
		date: dayjs(Date.now()).format(dateAPIFormat),
		page: 0,
	},
	grid: gridStorage ? JSON.parse(gridStorage) : false,
};

export const homeSlice = createSlice({
	name: 'home',
	initialState,
	reducers: {
		setHomeParams: (state, action: PayloadAction<HomeState['params']>) => {
			state.params = action.payload;
		},
		setHomeGrid: (state, action: PayloadAction<boolean>) => {
			state.grid = action.payload;
		},
	},
});

export const homeActions = homeSlice.actions;
export const homeReducer = homeSlice.reducer;
