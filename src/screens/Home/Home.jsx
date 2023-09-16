
import { Header }  from '../../Components'
import { CategoryItem } from './components'
import { FlatList, View } from 'react-native'
import cursos from '../../data/cursos'
import React from 'react'
import styles from './Home.style'

const Home = ({setCursoSelected}) => {
  return (
    <View style={styles.container}>
      <Header title={'Cursos 🏫'}/>
       <FlatList
       style={styles.list}
       data={cursos}
       keyExtractor={curso => curso}
       renderItem={({ item }) => (
       <CategoryItem curso={item}
       setCursoSelected={setCursoSelected}
       />)}        
      
     />
     </View>

    


  )
}

export default Home



