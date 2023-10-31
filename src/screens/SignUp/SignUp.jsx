import { View, Text, TextInput, Pressable, ImageBackground, Image } from 'react-native'
import React, { useState } from 'react'
import styles from './SignUp.style'
import { useSignUpMutation } from '../../services/authApi'
import { useDispatch } from 'react-redux'
import { setUser } from '../../features/auth/authSlice'
import background from '../../../assets/back2.jpg'
import logo from '../../assets/logo-schoolex.png'


const SignUp = ( {navigation} ) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPass, setConfirmPass] = useState('')  
  const [triggerSignUp] = useSignUpMutation(  
  );  
  const dispatch = useDispatch()
  
  const onSubmit = () => {    
    triggerSignUp({
      email,
      password,
    })
    .unwrap()    
    .then(result => {
      dispatch(setUser(result))
    })
    .catch(err => console.log(err))
  }

  const navigateToLogin = () => {
    navigation.navigate("Login")  
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
            Regístrate para comenzar
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
        onChangeText={setPassword}/>
        
        <TextInput style={styles.inputEmail} 
        placeholder='Confirmar Contraseña' 
        placeholderTextColor='#fff'
        value={confirmPass} 
        onChangeText={setConfirmPass}/>

        <View>
        <Text style={styles.subtitle}>
            Selecciona tu tipo de perfil:
        </Text>
        </View>        
        <Pressable style={styles.registerButton} onPress={onSubmit}>
            <Text style={styles.loginButtonTxt}>Registrarse</Text>
        </Pressable>
          <View style={styles.line}></View>
        <View style={styles.loginSectionContainer}>


          <Text style={styles.subtitle}>¿Ya tienes una cuenta?</Text>
          <Pressable style={styles.loginButton} onPress={navigateToLogin}>
              <Text style={styles.loginButtonTxt}>Acceder</Text>
          </Pressable>

        </View>
        
      </View>
    </View>
    </ImageBackground>
  )
}

export default SignUp