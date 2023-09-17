import { View, Text } from 'react-native'
import React from 'react'
import { Header } from '../../Components'
import styles from './StudentProfile.style'

const StudentProfile = ({ route }) => {
    
  const { student } = route.params

  return (
    <View style={styles.container}>
      {/* <Header title={'Alumno'}/>         */}
        <Text style={styles.text}>Nombre: {student.name}</Text>
        <Text style={styles.text}>Apellido: {student.lastname}</Text>
        <Text style={styles.text}>Género: {student.sex} {student.sexicon}</Text>        
        <Text style={styles.subject}>Lengua: {student.Lengua}</Text>
        <Text style={styles.subject}>Cs. Sociales: {student.Sociales}</Text>
        <Text style={styles.subject}>Matemática: {student.Matematica}</Text>
        <Text style={styles.subject}>Cs. Naturales: {student.Naturales}</Text>
        <Text style={styles.subject}>Música: {student.Musica}</Text>
        <Text style={styles.subject}>Ed. Física: {student.EdFisica}</Text>
    </View>
  )
}

export default StudentProfile