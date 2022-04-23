import { createSlice } from '@reduxjs/toolkit';

export const todoReducer = createSlice({
	name: 'todo',
	initialState: { todo: [] },
	reducers: {
		populateTodo: (state, action) => {
			state.todo = action.payload;
		},
		decrement: (state) => {
			state.value -= 1;
		},
		incrementByAmount: (state, action) => {
			state.value += action.payload;
		}
	}
});

export const { populateTodo, decrement, incrementByAmount } = todoReducer.actions;

export default todoReducer.reducer;
