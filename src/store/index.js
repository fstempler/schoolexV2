import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counter/counterSlice";
import students from "../data/students";

export const store = configureStore({
    reducer: {
        counter: counterSlice,
        studentData: () => students,
    },
})