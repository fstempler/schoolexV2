import { Pressable, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import styles from './SearchInput.style'

const SearchInput = ({onSearch}) => {
    const [value, setValue] = useState('')

    const search = () => {
        onSearch(value)
    }

    const clearInput = () => {
        setValue('');
        onSearch('')
    }
  
    return (
      <View style={styles.container}>
        <TextInput style={styles.input} value={value} onChangeText={setValue} placeholder='Buscar alumno...' placeholderTextColor='#393E41'/>
        <Pressable onPress={search} style={styles.icon}>
            <MaterialCommunityIcons name="account-search-outline" size={30} color="#393E41" />
        </Pressable>
        <Pressable onPress={clearInput} style={styles.icon}>
            <MaterialIcons name="clear" size={30} color="#393E41" />
        </Pressable>
      </View>
    )
  
}

export default SearchInput