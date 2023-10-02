import { Pressable, Text } from 'react-native'
import { Card } from '../../../../Components'
import React from 'react'
import styles from './CategoryItem.style'
import { useDispatch } from 'react-redux'
import { setCursoSelected } from '../../../../features/school/school.Slice'

const CategoryItem = ({curso, navigation}) => {
  const dispatch = useDispatch()
  return (
    <Pressable onPress={ () => {
      dispatch(setCursoSelected(curso))
      navigation.navigate('Students', { curso })}}>
        <Card style={styles.cardContainer}>           
            <Text style={styles.text}>📚 {curso}</Text>
        </Card>
    </Pressable>
  )
}

export default CategoryItem

