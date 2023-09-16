import { Pressable, Text } from 'react-native'
import { Card } from '../../../../Components'
import React from 'react'
import styles from './CategoryItem.style'

const CategoryItem = ({curso, setCursoSelected}) => {
  return (
    <Pressable onPress={ () => setCursoSelected(curso)}>
        <Card style={styles.cardContainer}>
            <Text style={styles.text}>📚 {curso}</Text>
        </Card>
    </Pressable>
  )
}

export default CategoryItem

