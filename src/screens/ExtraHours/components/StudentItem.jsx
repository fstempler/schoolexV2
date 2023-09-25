import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './Studentitem.style';

const StudentItem = ({ student }) => {
  // console.log('Datos del estudiante: ', student);

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
        <Pressable >
          <MaterialCommunityIcons name="face-man-profile" size={24} color="#fff" />
        </Pressable>
      </View>
    </View>
  );
}

export default StudentItem;
