import { View, Text, Pressable, Image, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { MaterialIcons, Entypo } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker'
import styles from './Profile.style'
import { useDispatch, useSelector } from 'react-redux';
import { setCameraImage } from '../../features/auth/authSlice';
import { usePostProfileImageMutation } from '../../services/classApi'; 

const Profile = () => {

    const image = useSelector(state => state.auth.imageCamera)
    const { localId } = useSelector(state => state.auth)
    const [triggerSaveProfileImage, result ] = usePostProfileImageMutation()
    const dispatch = useDispatch()    
    
    const verifyCameraPermissions = async () => {
      const {granted} = await ImagePicker.requestCameraPermissionsAsync()
      if(!granted) {
        return false
      }
      return true
    }
    
    const pickImage = async () => {
      const isCameraOk = await verifyCameraPermissions()
      if (isCameraOk){
        let result = await ImagePicker.launchCameraAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [9, 16],
          base64: true,
          quality: 0.4,
        })
        if(!result.canceled){          
          dispatch(
            setCameraImage(`data:image/jpeg;base64,${result.assets[0].base64}`)
            )
      
        }
      }   
    }
    
    const confirmImage = () => {
      triggerSaveProfileImage({image, localId})
      console.log(result)
    }


  return (
    <View style={styles.container}>
        {image ? <Image 
        source={{
            uri: image,
        }}
        style={styles.image}
        resizeMode='cover'
    /> : (
      <Image 
        source={{
            uri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
        }}
        style={styles.image}
        resizeMode='cover'
    />
    )}
    <View style={styles.picBtnContainer}>
    <Pressable style={styles.cameraButton} onPress={pickImage}>
        <MaterialIcons name="photo-camera" size={24} color="black" />
        <Text>  Foto de perfil</Text>
    </Pressable>
    <Pressable style={styles.cameraButton} onPress={confirmImage}>
        <MaterialIcons name="check" size={24} color="black" />
        <Text>  Confirmar</Text>
    </Pressable>
    </View>
    <View style={styles.dataContainer}>
      <Text style={styles.dataText}>Nombre: </Text>
      <TextInput style={styles.input}/>          
      <Entypo name="pencil" size={24} color="black" />   
    </View>  

    <View style={styles.dataContainer}>
      <Text style={styles.dataText}>Apellido: </Text>
      <TextInput style={styles.input}/> 
      <Entypo name="pencil" size={24} color="black" />    
    </View>  

    </View>
  )
}

export default Profile