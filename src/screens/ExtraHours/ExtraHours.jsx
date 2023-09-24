import React from 'react';
import { View, FlatList } from 'react-native';
import styles from './ExtraHours.style';
import students from '../../data/students';
import StudentItem from './components/StudentItem';
import { Header } from '../../Components';
import { useSelector } from 'react-redux';

const ExtraHours = () => {
  const filteredStudents = students.filter((student) => {
    return student.subjects.some((subject) => subject.grade < 7);
  });

  
  console.log(filteredStudents)

  const renderItem = ({ item }) => <StudentItem student={item} />;

  return (
    
    <View style={styles.container}>
      <Header title={'Clases de Repaso'}/>  
      <View>
        <FlatList
          data={filteredStudents}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
}

export default ExtraHours;

