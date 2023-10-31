import { View, Text, Pressable, ImageBackground } from 'react-native';
import React, { useEffect } from 'react';
import styles from './StudentProfile.style';
import { Entypo } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, updateGrade, initializeGrades } from '../../features/counter/counterSlice';
import { addItem, selectStudent } from '../../features/specialClass/specialClassSlice';
import { useGetStudentsByCursoQuery } from '../../services/classApi'
import background from '../../../assets/back2.jpg'

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
    <ImageBackground source={background} 
    resizeMode='cover'
    style={styles.imageBackground}>
    <View style={styles.container}>

      <View style={styles.nameContainer}>
        <Text style={styles.textName}>{student.name}</Text>
        <Text style={styles.textName}>{student.lastname}</Text>
      </View>
      
      <Text style={styles.text}>Género: {student.sex} {student.sexicon}</Text>
      <Text style={styles.text}>Curso: {student.curso}</Text>

      {student.subjects.map((subject) => (
        <View style={styles.subjectContainer} key={subject.name}>
          <Text style={styles.subject}>{subject.name}: </Text>
          <View style={styles.counterContainer}>            
            <Text style={styles.grade}>{subjectGrades[subject.name] || 0}</Text>            
            <Pressable 
              style={styles.addBtn}
              onPress={handleAddToSpecialClass}>
              <Text><Entypo name="plus" size={12} color="#393E41" /> Clase de Repaso</Text>
            </Pressable>
          </View>
        </View>
      ))}
    </View>
    </ImageBackground>
  );
};

export default StudentProfile;

