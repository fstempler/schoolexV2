import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import studentsData from '../../data/students' 
import styles from './Students.style'
import { Header, SearchInput } from '../../Components'

const Students = ({ navigation, route }) => {
  const [arrStudents, setArrStudents] = useState([])
  const [keyword, setKeyword] = useState('')
  const { curso } = route.params

  useEffect(() => {
    if (curso) {
      const studentsFilteredByCurso = studentsData.filter(
        (student) => student.curso === curso
      )
      const studentsFilteredByName = studentsFilteredByCurso.filter((student) =>
        student.name.includes(keyword)
      )
      setArrStudents(studentsFilteredByName)
    } else {
      const studentsFilteredByName = studentsData.filter((student) =>
        student.name.includes(keyword)
      )
      setArrStudents(studentsFilteredByName)
    }
  }, [curso, keyword]);  

  return (
    <View style={styles.container}>
      {/* <Header title={curso} /> */}
      <SearchInput onSearch={setKeyword} />
      <View style={styles.listContainer}>
        <FlatList
          data={arrStudents}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.textContainer} onPress={() => navigation.navigate('StudentProfile', {student: item})}>
              <Text style={styles.text}>
                {item.sexicon} {item.name} {item.lastname}
              </Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  )
}

export default Students
