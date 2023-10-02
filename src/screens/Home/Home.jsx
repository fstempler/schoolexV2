
  // import { Header }  from '../../Components'
  import { CategoryItem } from './components'
  import { FlatList, View } from 'react-native'
  import cursos from '../../data/cursos'
  import React from 'react'
  import styles from './Home.style'  
import { useGetCursosQuery } from '../../services/classApi'

  const Home = ({setCursoSelected, navigation}) => {
    const {data, isLoading} = useGetCursosQuery()
    return (
      <View style={styles.container}>
        {/* <Header title={'Cursos 🏫'}/> */}        
        <FlatList
        style={styles.list}
        data={data}
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



