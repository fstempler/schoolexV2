import { Text, View } from 'react-native'
import styles from './Header.style'
import { AntDesign } from '@expo/vector-icons';

import React from 'react'

const Header = ({ title }) => {
  return (
    <View style={styles.container}>          
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

export default Header

