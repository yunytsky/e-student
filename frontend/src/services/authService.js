import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:7150",
        prepareHeaders: (headers, {getState}) => {
            const token = getState().auth.value.token;
            console.log("user fetch in protected route", token, localStorage.getItem("token"))
            if(token){
                headers.set("authorization", `Bearer ${token}`);
                return headers;
            }
        },

    }),
    endpoints: (builder) => ({
        getUserInfo: builder.query({
            query: () => ({
                url: "/user/student-profile",
                method: "GET",
            })
        })
    })
})

export const {useGetUserInfoQuery} = authApi;