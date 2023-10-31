
  // import { Header }  from '../../Components'
  import { Text, ImageBackground } from 'react-native'
  import { CategoryItem } from './components'
  import { FlatList, View } from 'react-native'  
  import React from 'react'
  import styles from './Home.style'  
  import { useGetCursosQuery } from '../../services/classApi'
  import background from '../../../assets/back2.jpg'

  const Home = ({ navigation }) => {
    const {data, isLoading} = useGetCursosQuery()
    return (
      <ImageBackground source={background} 
    resizeMode='cover'
    style={styles.imageBackground}>
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
      </ImageBackground>

    )
  }

  export default Home



