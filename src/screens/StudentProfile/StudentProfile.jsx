import { View, Text, Pressable } from 'react-native';
import React, { useEffect } from 'react';
import styles from './StudentProfile.style';
import { Entypo } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, updateGrade, initializeGrades } from '../../features/counter/counterSlice';
import { addItem, selectStudent } from '../../features/specialClass/specialClassSlice';

const StudentProfile = ({ route }) => {
  const { student } = route.params;
  const dispatch = useDispatch();
  const subjectGrades = useSelector((state) => state.counter);

  const handleAddToSpecialClass = (subjectName, grade) => {
    dispatch(addItem(student));
    dispatch(selectStudent(student.id));
  }

  // Utiliza useEffect para inicializar las calificaciones cuando el componente se monta
  useEffect(() => {
    const grades = {};
    student.subjects.forEach((subject) => {
      grades[subject.name] = subject.grade;
    });
    dispatch(initializeGrades({ grades }));
  }, [dispatch, student.subjects]);

  const handleIncrement = (subjectName) => {
    dispatch(increment({ subject: subjectName }));
  };

  const handleDecrement = (subjectName) => {
    dispatch(decrement({ subject: subjectName }));
  }; 

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Nombre: {student.name}</Text>
      <Text style={styles.text}>Apellido: {student.lastname}</Text>
      <Text style={styles.text}>Género: {student.sex} {student.sexicon}</Text>
      <Text style={styles.text}>Curso: {student.curso}</Text>

      {student.subjects.map((subject) => (
        <View style={styles.subjectContainer} key={subject.name}>
          <Text style={styles.subject}>{subject.name}: </Text>
          <View style={styles.counterContainer}>
            <Pressable
              style={styles.counterButtons}
              onPress={() => handleDecrement(subject.name)}>
              <Entypo name="minus" size={24} color="#fff" />
            </Pressable>
            <Text style={styles.grade}>{subjectGrades[subject.name] || 0}</Text>
            <Pressable
              style={styles.counterButtons}
              onPress={() => handleIncrement(subject.name)}>
              <Entypo name="plus" size={24} color="#fff" />
            </Pressable>
            <Pressable 
              style={styles.counterButtons}
              onPress={handleAddToSpecialClass}>
              <Entypo name="check" size={24} color="#fff" />
            </Pressable>
          </View>
        </View>
      ))}
    </View>
  );
};

export default StudentProfile;

