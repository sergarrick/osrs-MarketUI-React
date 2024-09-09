import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';



export type UserState = {
	userAgent: string,
	email: string,
}

const initialState: UserState = {
	userAgent: typeof window !== 'undefined' && window.localStorage.getItem('agent') ? window.localStorage.getItem('agent') : '',
	email: typeof window !== 'undefined' && window.localStorage.getItem('email') ? window.localStorage.getItem('email') : '',
}




export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUserAgent: (state, action: PayloadAction<any>) => {
			state.userAgent = action.payload;
		},
		setEmail: (state, action: PayloadAction<any>) => {
			state.email = action.payload;
		},
	},
	extraReducers: (builder) => {

	},
})


export const {
	setUserAgent,
	setEmail,
} = userSlice.actions;

export const selectUser = (state: RootState) => state.user;


export default userSlice.reducer;
