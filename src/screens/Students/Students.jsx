import { View, Text, FlatList, TouchableOpacity, ImageBackground } from 'react-native'
import React, { useState, useEffect } from 'react'
import styles from './Students.style'
import { SearchInput } from '../../Components'
import { useSelector } from 'react-redux'
import { useGetStudentsByCursoQuery } from '../../services/classApi'
import background from '../../../assets/back2.jpg'

const Students = ({ navigation }) => {
  const curso = useSelector(state => state.class.cursoSelected)
  const [arrStudents, setArrStudents] = useState([])
  const [keyword, setKeyword] = useState('')
  const { data, isLoading } = useGetStudentsByCursoQuery(curso)  
 


  useEffect(() => {
    console.log(data, isLoading)
    if (!isLoading) {
      const dataArr = Object.values(data)
      setArrStudents(dataArr)
      const studentsFilteredByName = dataArr.filter(student =>
        student.name.includes(keyword)
        )
        setArrStudents(studentsFilteredByName)
    }
  }, [isLoading, keyword])

  return (
    <ImageBackground source={background} 
    resizeMode='cover'
    style={styles.imageBackground}>
    <View style={styles.container}>      
      <SearchInput onSearch={setKeyword} />
      <View style={styles.listContainer}>
        {!isLoading && (
          <FlatList
          data={Object.values(arrStudents)}
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
    </ImageBackground>
  )
}

export default Students
