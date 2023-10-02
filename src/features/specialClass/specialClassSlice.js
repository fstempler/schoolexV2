import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: 'userLogged',
    updatedAt: Date.now(),
    items: [],
    selectedStudent: null,
}

export const specialClassSlice = createSlice({
    name: "specialClasses",
    initialState,
    reducers: {
        addItem: (state, action) => {
            const studentRepeated = state.items.findIndex(
                item => item.id === action.payload.id
            )
            if (studentRepeated !== -1){
                state.items[studentRepeated] = action.payload;
            }else{
                state.items.push(action.payload);
            }
        },        
        selectStudent: (state, action) => {
            state.selectedStudent = action.payload;
        },
        removeItem: (state) => {
            if (state.selectedStudent) {
                state.items = state.items.filter(
                    (item) => item.id !== state.selectedStudent
                );
                state.selectedStudent = null;
            }
        },
    },
});

export const { addItem, removeItem, selectStudent } = specialClassSlice.actions

export default specialClassSlice.reducer