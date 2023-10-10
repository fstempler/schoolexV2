import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { classApi } from "../services/classApi";
import counterSlice from "../features/counter/counterSlice";
import classSlice from "../features/school/school.Slice";
import students from "../data/students";
import specialClassSlice from "../features/specialClass/specialClassSlice";
import { authApi } from "../services/authApi";
import authSlice from "../features/auth/authSlice";

const store = configureStore({
    reducer: {
        counter: counterSlice,
        class: classSlice,
        specialClass: specialClassSlice,
        auth: authSlice,
        [classApi.reducerPath]: classApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
        studentData: () => students,        
    },
    middleware: 
    getDefaultMiddleware => getDefaultMiddleware().concat(classApi.middleware, authApi.middleware)
})

setupListeners(store.dispatch)

export default store