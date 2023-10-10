import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseUrl } from '../firebase'

export const classApi = createApi({
    reducerPath: 'classApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: builder => ({
        getCursos: builder.query({
            query: () => 'cursos.json',
        }),
        getStudents: builder.query({
            query: () => 'students.json',
        }),
        getStudentsByCurso: builder.query({
            query: curso => 
            `students.json?orderBy="curso"&equalTo="${curso}"`,
        }),   
        getProfileImage: builder.query({
            query: localId => `profileImages/${localId}.json`,
        }),
        postProfileImage: builder.mutation({
            query: ({image, localId}) => ({
                url:`profileImages/${localId}.json`,
                method: 'PUT',
                body: {
                    image: image,
                },
            }),
        }),   
    }),
})

export const {
    useGetCursosQuery,
    useGetStudentsQuery, 
    useGetStudentsByCursoQuery,    
    useGetProfileImageQuery,
    usePostProfileImageMutation,
} = classApi