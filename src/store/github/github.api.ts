import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IUser } from '../../models/models'

export const githubApi = createApi({
	reducerPath: 'github/api',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://api.github.com/'
	}),
	refetchOnFocus: true,
	endpoints: build => ({
		searchUsers: build.query<IUser[], string>({
			query: () => ({
				url: `/users`,
			}),
		}),
	})
})

export const { useSearchUsersQuery } = githubApi