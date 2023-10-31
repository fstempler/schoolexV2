import React from 'react';
import { View, FlatList, ImageBackground } from 'react-native';
import styles from './ExtraHours.style';
import StudentItem from './components/StudentItem';
import { Header } from '../../Components';
import { useSelector } from 'react-redux';
import background from '../../../assets/back2.jpg'


const ExtraHours = () => {
  const specialClass = useSelector(state => state.specialClass.items)

  

  const renderItem = ({ item }) => <StudentItem student={item} />;

  return (
    <ImageBackground source={background} 
    resizeMode='cover'
    style={styles.imageBackground}>
    <View style={styles.container}>
      <Header title={'Clases de Repaso'}/>  
      <View>
        <FlatList
          data={specialClass}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      </View>
    </View>
    </ImageBackground>
  );
}

export default ExtraHours;

