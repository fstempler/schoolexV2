import { View, Text, Pressable, Image, TextInput, ImageBackground } from 'react-native'
import React, { useEffect, useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker'
import styles from './Profile.style'
import { useDispatch, useSelector } from 'react-redux';
import { usePostProfileImageMutation, useUpdateProfileDataMutation, useGetUserDataQuery } from '../../services/classApi'; 
import background from '../../../assets/back2.jpg'
import { clearUser, setCameraImage, setUserData } from '../../features/auth/authSlice';
import { deleteSession } from '../../db';

const Profile = () => {
    
    const { localId } = useSelector(state => state.auth)
    const image = useSelector(state => state.auth.imageCamera)    
    const { data: userData, isLoading: isUserDataLoading, isError: isUserDataError } = useGetUserDataQuery(localId);
    console.log('userData:', userData);


    
    const [triggerSaveProfileImage, result ] = usePostProfileImageMutation()
    const dispatch = useDispatch()    
    const [updatedData, setUpdatedData] = useState(null)

    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    const [triggerUpdateProfileData, mutationResult] = useUpdateProfileDataMutation();

    const updateProfileData = () => {
      if (localId) {
      triggerUpdateProfileData({
        localId: localId, 
        name, 
        lastName,
        email, 
        phone, 
      });
      
    } else {
      console.error("localId no es un valor válido.")
    }
  }
    


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

    const logout = () => {
      dispatch(clearUser())
      deleteSession()
    }

    useEffect(() => {
      if(mutationResult.isSuccess && mutationResult.data) {
        setUpdatedData(mutationResult.data);
        setName('');
        setLastName('');
        setEmail('');
        setPhone('');
      }
    }, [mutationResult.isSuccess, mutationResult.data]);
    
    useEffect(() => {
      
    if (isUserDataLoading) {
      console.log('User Data Loading')
    }

    if (isUserDataError) {
      console.log('User Data Error')
    }

    if (!userData){
      console.log('No user Data')
    }

    if (userData) {
      dispatch(setUserData(userData))
    }
    }, [userData, isUserDataLoading, isUserDataError])

  return (
    <ImageBackground source={background} 
    resizeMode='cover'
    style={styles.imageBackground}>
    <View style={styles.container}>
    <View style={styles.profilePicContainer}>
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

      <View style={styles.userDataContainer}>
        <Text style={styles.userDataText}>Nombre: {userData && userData.name}</Text>
        <Text style={styles.userDataText}>Apellido: {userData && userData.lastName}</Text>
        <Text style={styles.userDataText}>Email: {userData && userData.email}</Text>
        <Text style={styles.userDataText}>Teléfono: {userData && userData.phone}</Text>
      </View>
      
    </View>

    <View style={styles.dataMainContainer}>
    <View style={styles.dataContainer}>
      <Text style={styles.dataTitle}>Modificar perfil</Text>     
    </View> 
    <View style={styles.picBtnContainer}>
        <Pressable style={styles.cameraButton} onPress={pickImage}>
            <MaterialIcons name="photo-camera" size={24} color="white" />
            <Text style={styles.textBtn}>  Foto de perfil</Text>
        </Pressable>
        <Pressable style={styles.cameraButton} onPress={confirmImage}>
            <MaterialIcons name="check" size={24} color="white" />
            <Text style={styles.textBtn}>  Confirmar</Text>
        </Pressable>
      </View> 
    <View style={styles.dataContainer}>
      <Text style={styles.dataText}>Nombre: </Text>
      <TextInput style={styles.input}
      value={name}
      onChangeText={setName}/>           
    </View>  

    <View style={styles.dataContainer}>
      <Text style={styles.dataText}>Apellido: </Text>
      <TextInput style={styles.input}
      value={lastName}
      onChangeText={setLastName}/>    
    </View>  

    <View style={styles.dataContainer}>
      <Text style={styles.dataText}>Email:  </Text>
      <TextInput style={styles.input}
      value={email}
      onChangeText={setEmail}/>    
    </View> 

    <View style={styles.dataContainer}>
      <Text style={styles.dataText}>Tel:  </Text>
      <TextInput style={styles.input}
      value={phone}
      onChangeText={setPhone}/>     
    </View> 
    
    <View style={styles.dataContainer}>
      <Pressable style={styles.saveChangesBtn} onPress={updateProfileData}>
        <Text style={styles.saveChangesBtnText}>Guardar cambios</Text>
      </Pressable>         
    </View> 

    
    <View style={styles.logoutContainer}>
      <Pressable onPress={logout}>
        
        <Text style={styles.logoutText}>Cerrar sesión</Text>
        
      </Pressable>
    </View>
    </View>    

    </View>
    </ImageBackground>
  )
}

export default Profile