import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { ITaskResponse } from './types';

export const tasksApi = createApi({
  reducerPath: 'tasksApi',
  tagTypes: ['Tasks'],
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3002/task/' }),
  endpoints: (builder) => ({
    getTasks: builder.query<ITaskResponse[], void>({
      query: () => '/get-tasks',
      providesTags: (result) =>
        result
          ? [
              ...result.map((task) => ({
                type: 'Tasks' as const,
                id: task._id,
              })),
              { type: 'Tasks', id: 'LIST' },
            ]
          : [{ type: 'Tasks', id: 'LIST' }],
    }),
    toggleTask: builder.mutation<
      ITaskResponse,
      { id: string; status: boolean }
    >({
      query: ({ id, status }) => ({
        url: `http://localhost:3002/task/${id}`,
        method: 'PATCH',
        body: { status },
      }),
      invalidatesTags: [{ type: 'Tasks', id: 'LIST' }],
    }),
    deleteTask: builder.mutation<ITaskResponse, { id: string }>({
      query: ({ id }) => ({
        url: `http://localhost:3002/task/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'Tasks' }],
    }),
  }),
});

export const {
  useGetTasksQuery,
  useToggleTaskMutation,
  useDeleteTaskMutation,
} = tasksApi;
