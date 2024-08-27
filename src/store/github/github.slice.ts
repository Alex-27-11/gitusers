import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IUser } from "../../models/models"

interface GithubState {
	users: IUser[],
	user: IUser,
	removeId: number[],
	likedUsersIds: number[],
}

const initialState: GithubState = {
	users: [],
	user: {} as IUser,
	removeId: [],
	likedUsersIds: [],
}

export const githubSlice = createSlice({
	name: 'github',
	initialState,
	reducers: {
		addUsers(state, action: PayloadAction<IUser[]>) {
			state.users = action.payload
		},
		addUser(state, action: PayloadAction<IUser>) {
			state.user = action.payload
		},
		addRemoveId(state, action: PayloadAction<number>) {
			state.removeId.push(action.payload)
		},
		addLikedUsersIds(state, action: PayloadAction<number[]>) {
			state.likedUsersIds = action.payload
		},
	},
})

export const githubActions = githubSlice.actions
export const githubReducer = githubSlice.reducer