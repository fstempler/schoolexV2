import { createSlice } from '@reduxjs/toolkit';
import cursos from '../../data/cursos';
import students from '../../data/students';

const initialState = {
    cursos: cursos,
    students: students,
    studentsFilteredByCursos: [],
    cursoSelected: null,
    studentIdSelected: null,
}

export const classSlice = createSlice({
    name:'class',
    initialState,
    reducers: {
        setCursoSelected: (state, action) => {
            state.cursoSelected = action.payload
        },
        setStudentIdSelected: (state, action) => {
            state.cursoSelected = action.payload
        },
    }
})

export const { setCursoSelected, setStudentIdSelected } = classSlice.actions
export default classSlice.reducer