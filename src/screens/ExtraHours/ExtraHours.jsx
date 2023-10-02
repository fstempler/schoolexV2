import React from 'react';
import { View, FlatList } from 'react-native';
import styles from './ExtraHours.style';
import StudentItem from './components/StudentItem';
import { Header } from '../../Components';
import { useSelector } from 'react-redux';


const ExtraHours = () => {
  const specialClass = useSelector(state => state.specialClass.items)

  

  const renderItem = ({ item }) => <StudentItem student={item} />;

  return (
    
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
  );
}

export default ExtraHours;

