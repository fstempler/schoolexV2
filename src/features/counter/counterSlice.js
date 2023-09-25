
// import { createSlice } from "@reduxjs/toolkit";
// import students from '../../data/students'; // Asegúrate de que la ruta sea correcta

// const calculateInitialGrades = () => {
//   const initialGrades = {};
//   students.forEach((student) => {
//     student.subjects.forEach((subject) => {
//       initialGrades[subject.name] = subject.grade;
//     });
//   });
//   return initialGrades;
// };

// const initialState = {
//   subjectGrades: calculateInitialGrades(),
// };

// export const counterSlice = createSlice({
//   name: 'counter',
//   initialState,
//   reducers: {
//     increment: (state, action) => {
//       const { subject } = action.payload;
//       state.subjectGrades[subject] += 1;
//     },
//     decrement: (state, action) => {
//       const { subject } = action.payload;
//       state.subjectGrades[subject] -= 1;
//     },
//     updateGrade: (state, action) => {
//       const { subject, newValue } = action.payload;   
//       const studentToUpdate = students.find((student) =>
//         student.subjects.some((subj) => subj.name === subject)
//       );
    
//       if (studentToUpdate) {      
//         const subjectToUpdate = studentToUpdate.subjects.find(
//           (subj) => subj.name === subject
//         );
    
//         if (subjectToUpdate) {      
//           state.subjectGrades[subject] = newValue;      
//           subjectToUpdate.grade = newValue;
//         }
//       }
//     },
//   },
// });

// export const { increment, decrement, updateGrade } = counterSlice.actions;

// export default counterSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

// Define el estado inicial como un objeto vacío
const initialState = {};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    // Define un action para inicializar las calificaciones
    initializeGrades: (state, action) => {
      // La acción payload debería contener las calificaciones
      const { grades } = action.payload;
      return grades;
    },
    increment: (state, action) => {
      const { subject } = action.payload;
      state[subject] += 1;
    },
    decrement: (state, action) => {
      const { subject } = action.payload;
      state[subject] -= 1;
    },
    updateGrade: (state, action) => {
      const { subject, newValue } = action.payload;
      state[subject] = newValue;
    },
  },
});

export const { initializeGrades, increment, decrement, updateGrade } = counterSlice.actions;

export default counterSlice.reducer;

