import { View, Text, TextInput, Pressable, ImageBackground, Image } from 'react-native'
import React, { useState } from 'react'
import styles from './Login.styles'
import { useLoginMutation } from '../../services/authApi'
import { useDispatch } from 'react-redux'
import { setUser } from '../../features/auth/authSlice'
import background from '../../../assets/back2.jpg'
import logo from '../../assets/logo-schoolex.png'
import { insertSession } from '../../db'

const Login = ( {navigation} ) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [triggerLogin] = useLoginMutation()
  const dispatch = useDispatch()

  const onSubmit = () => {
    //console.log(email, password)
    triggerLogin({ 
      email, 
      password 
    })
    .unwrap()
    .then(result => {
      dispatch(setUser(result))
      insertSession({
        localId: result.localId,
        email: result.email,
        token: result.idToken,
      })
      .then(result => console.log(result))
      .catch(error => console.log(error.message))
    })     
    
  }

  const navigateToSignUp = () => {
    navigation.navigate("SignUp")  
  }

  return (
    <ImageBackground source={background} 
    resizeMode='cover'
    style={styles.imageBackground}>
    <View style={styles.container}>     
      <View style={styles.imageContainer}>
        <Image source={logo} style={styles.logo}/>        
      </View>
      <View style={styles.loginContainer}>
        <Text style={styles.title}>
            Ingresa tus datos
        </Text>
        <TextInput style={styles.inputEmail} 
        placeholder='Email' 
        placeholderTextColor='#fff'
        value={email} 
        onChangeText={setEmail}/>
        <TextInput style={styles.inputEmail} 
        placeholder='Contraseña' 
        placeholderTextColor='#fff'
        value={password} 
        onChangeText={setPassword} />
        <Pressable style={styles.loginButton} onPress={onSubmit}>
            <Text style={styles.loginButtonTxt}>Acceder</Text>
        </Pressable>
        <Text style={styles.subtitle}>¿No tienes una cuenta?</Text>
        <Pressable style={styles.registerButton} onPress={navigateToSignUp}>
            <Text style={styles.loginButtonTxt}>Registrare</Text>
        </Pressable>
      </View>
    </View>
    </ImageBackground>
  )
}


export default Login