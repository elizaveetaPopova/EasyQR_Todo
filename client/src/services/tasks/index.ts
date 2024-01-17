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
                id: task.id,
              })),
              { type: 'Tasks', id: 'LIST' },
            ]
          : [{ type: 'Tasks', id: 'LIST' }],
    }),
  }),
});

export const { useGetTasksQuery } = tasksApi;
