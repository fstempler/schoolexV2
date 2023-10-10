import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './Studentitem.style';
import { useSelector, useDispatch } from 'react-redux';
import { selectStudent, removeItem } from '../../../features/specialClass/specialClassSlice';


const StudentItem = ({ student }) => {
  const selectedStudentId = useSelector(state => state.specialClass.selectedStudent);
  const dispatch = useDispatch();

  const handleStudentPress = () => {
    dispatch(removeItem());    
  }


  return (
    <View style={styles.container}>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>Nombre: {student.name}</Text>
        <Text style={styles.name}>Apellido: {student.lastname}</Text>
      </View>
      <View style={styles.details}>
        {student.subjects.map((subject) => (
          subject.grade < 7 && (
            <View style={styles.detailsStudent} key={subject.name}>            
              <Text style={styles.course}>Curso: {student.curso}</Text>
              <Text style={styles.subject}>Materia: {subject.name}</Text>
              <Text style={styles.grade}>
                Calificación: {subject.grade}
              </Text>
            </View>
          )
        ))}
      </View>
      <View>
        <Pressable onPress={handleStudentPress}>
          <Ionicons name="person-remove" size={24} color="#393E41" />
        </Pressable>
      </View>
    </View>
  );
}

export default StudentItem;
