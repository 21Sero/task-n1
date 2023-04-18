import { createSlice } from "@reduxjs/toolkit";


const cardSlice = createSlice({
	name: "card",
	initialState: [],
	reducers: {
		addNewCard: (state) => {
			state.push({
				id: window.crypto.randomUUID(),
				number: Math.floor(Math.random() * 1000) + 1,
			})
		},
		deleteCardItem: (state, action) => {
			return state.filter(elem => elem.id !== action.payload)
		},
		sortByAscendingOrder: (state) => {

			state.sort((a, b) => a.number - b.number)
			return state
		}
	}
})


export default cardSlice.reducer
export const { addNewCard, deleteCardItem, sortByAscendingOrder } = cardSlice.actions

