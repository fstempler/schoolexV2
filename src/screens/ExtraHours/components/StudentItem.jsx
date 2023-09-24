import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './Studentitem.style';
import { useSelector } from 'react-redux';


const StudentItem = ({ student }) => {
  
  // Filtra las asignaturas con calificación < 7
  const under7Subjects = student.subjects.filter((subject) => subject.grade < 7);
  

  return (
    <View style={styles.container}>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>Nombre: {student.name}</Text>
        <Text style={styles.name}>Apellido: {student.lastname}</Text>
      </View>
      <View style={styles.details}>
        {under7Subjects.map((subject) => (
          <View style={styles.detailsStudent} key={subject.name}>            
            <Text style={styles.course}>Curso: {student.curso}</Text>
            <Text style={styles.subject}>Materia: {subject.name}</Text>
            <Text style={styles.grade}>Calificación: {subject.grade}</Text>
          </View>
        ))}
      </View>
      <View>
        <Pressable >
          <MaterialCommunityIcons name="face-man-profile" size={24} color="#fff" />
        </Pressable>
      </View>
    </View>
  );
}

export default StudentItem;
