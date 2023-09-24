
import { createSlice } from "@reduxjs/toolkit";
import students from '../../data/students'; // Asegúrate de que la ruta sea correcta

const calculateInitialGrades = () => {
  const initialGrades = {};
  students.forEach((student) => {
    student.subjects.forEach((subject) => {
      initialGrades[subject.name] = subject.grade;
    });
  });
  return initialGrades;
};

const initialState = {
  subjectGrades: calculateInitialGrades(),
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state, action) => {
      const { subject } = action.payload;
      state.subjectGrades[subject] += 1;
    },
    decrement: (state, action) => {
      const { subject } = action.payload;
      state.subjectGrades[subject] -= 1;
    },
    updateGrade: (state, action) => {
      const { subject, newValue } = action.payload;
    
      // Encuentra al estudiante específico que está siendo modificado
      const studentToUpdate = students.find((student) =>
        student.subjects.some((subj) => subj.name === subject)
      );
    
      if (studentToUpdate) {
        // Encuentra la materia correspondiente dentro del estudiante
        const subjectToUpdate = studentToUpdate.subjects.find(
          (subj) => subj.name === subject
        );
    
        if (subjectToUpdate) {
          // Actualiza la calificación de la materia en el estado de Redux
          state.subjectGrades[subject] = newValue;
    
          // Actualiza la calificación de la materia en los datos del estudiante
          subjectToUpdate.grade = newValue;
        }
      }
    },
  },
});

export const { increment, decrement, updateGrade } = counterSlice.actions;

export default counterSlice.reducer;
