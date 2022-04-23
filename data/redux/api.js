import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const todoApi = createApi({
	reducerPath: 'todo',
	baseQuery: fetchBaseQuery({ baseUrl: '/api/' }),
	endpoints: (builder) => ({
		users: builder.query({
			query: () => 'getUsers'
		}),
		todo: builder.query({
			query: () => 'getTodo'
		}),
		session: builder.query({
			query: () => 'getSession'
		})
	})
});

export const { useUsersQuery, useTodoQuery, useSessionQuery } = todoApi;
