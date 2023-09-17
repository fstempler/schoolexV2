
import { Header }  from '../../Components'
import { CategoryItem } from './components'
import { FlatList, View } from 'react-native'
import cursos from '../../data/cursos'
import React from 'react'
import styles from './Home.style'

const Home = ({setCursoSelected, navigation}) => {
  return (
    <View style={styles.container}>
      {/* <Header title={'Cursos 🏫'}/> */}
       <FlatList
       style={styles.list}
       data={cursos}
       keyExtractor={curso => curso}
       renderItem={({ item }) => (
       <CategoryItem curso={item}       
       navigation={navigation}
       />)}        
      
     />
     </View>

    


  )
}

export default Home



