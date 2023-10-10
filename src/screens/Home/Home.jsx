
  // import { Header }  from '../../Components'
  import { Text } from 'react-native'
  import { CategoryItem } from './components'
  import { FlatList, View } from 'react-native'  
  import React from 'react'
  import styles from './Home.style'  
  import { useGetCursosQuery } from '../../services/classApi'

  const Home = ({setCursoSelected, navigation}) => {
    const {data, isLoading} = useGetCursosQuery()
    return (
      <View style={styles.container}>
        {/* <Header title={'Cursos 🏫'}/> */}        
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Selecciona tu curso a cargo:</Text>
        </View>
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



