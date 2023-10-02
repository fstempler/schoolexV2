import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import studentsData from '../../data/students' 
import styles from './Students.style'
import { Header, SearchInput } from '../../Components'
import { useSelector } from 'react-redux'
import { useGetStudentsByCursoQuery } from '../../services/classApi'

const Students = ({ navigation }) => {
  const curso = useSelector(state => state.class.cursoSelected)
  const [arrStudents, setArrStudents] = useState([])
  const [keyword, setKeyword] = useState('')
  const { data, isLoading } = useGetStudentsByCursoQuery(curso)  

  useEffect(() => {
    
    if (data) {      
      const studentsFilteredByName = data.filter((student) =>
        student.name.includes(keyword)
      )      
    } 
  }, []);  

  return (
    <View style={styles.container}>
      {/* <Header title={curso} /> */}
      <SearchInput onSearch={setKeyword} />
      <View style={styles.listContainer}>
        {!isLoading && (
          <FlatList
          data={Object.values(data)}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.textContainer} onPress={() => navigation.navigate('StudentProfile', {student: item})}>
              <Text style={styles.text}>
                {item.sexicon} {item.name} {item.lastname}
              </Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
        />
        )}
        
      </View>
    </View>
  )
}

export default Students
