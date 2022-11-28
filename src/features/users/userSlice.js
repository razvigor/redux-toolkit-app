import { createSlice } from '@reduxjs/toolkit';

const initialState = [
	{ id: '0', name: 'Sasa Trkulja' },
	{ id: '1', name: 'Daliborka Trkulja' },
	{ id: '2', name: 'Svjetlana Trkulja' },
];

const userSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default userSlice.reducer;
