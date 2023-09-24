import { View, Text, Pressable } from 'react-native';
import React from 'react';
import styles from './StudentProfile.style';
import { Entypo } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, updateGrade } from '../../features/counter/counterSlice';

const StudentProfile = ({ route }) => {
  const { student } = route.params;
  const dispatch = useDispatch();
  const subjectGrades = useSelector((state) => state.counter.subjectGrades);


  const handleIncrement = (subjectName) => {
    dispatch(increment({ subject: subjectName }));
  };

  const handleDecrement = (subjectName) => {
    dispatch(decrement({ subject: subjectName }));
  };

  const handleUpdateGrade = (subjectName, newGrade) => {
    console.log('Antes de la actualización:', subjectGrades[subjectName]);
    dispatch(updateGrade({ subject: subjectName, newValue: newGrade }));
    console.log('Después de la actualización:', subjectGrades[subjectName]);
  };

  

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Nombre: {student.name}</Text>
      <Text style={styles.text}>Apellido: {student.lastname}</Text>
      <Text style={styles.text}>Género: {student.sex} {student.sexicon}</Text>

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
              onPress={() => handleUpdateGrade(subject.name, subjectGrades[subject.name] || subject.grade)}>
              <Entypo name="check" size={24} color="#fff" />
            </Pressable>
          </View>
        </View>
      ))}
    </View>
  );
};

export default StudentProfile;
