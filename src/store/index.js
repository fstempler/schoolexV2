import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { classApi } from "../services/classApi";
import counterSlice from "../features/counter/counterSlice";
import classSlice from "../features/school/school.Slice";
import students from "../data/students";
import specialClassSlice from "../features/specialClass/specialClassSlice";

const store = configureStore({
    reducer: {
        counter: counterSlice,
        class: classSlice,
        specialClass: specialClassSlice,
        [classApi.reducerPath]: classApi.reducer,
        studentData: () => students,        
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(classApi.middleware)
})

setupListeners(store.dispatch)

export default store