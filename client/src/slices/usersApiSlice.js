import { apiSlice } from './apiSlice';
const USERS_URL = '/api/v1/auth';


export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/login/`,
                method: 'POST',
                body: data,
            }),
        }),
        logout: builder.mutation({
            query: () => ({
                url: `${USERS_URL}/logout/`,
                method: 'POST',
            }),
        }),
        register: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/registration/`,
                method: 'POST',
                body: data,
            }),
        }),
    }),
});

export const { useLoginMutation,useLogoutMutation,useRegisterMutation, } = userApiSlice;
