import { View, Text, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'
import styles from './SignUp.style'
import { useSignUpMutation } from '../../services/authApi'
import { useDispatch } from 'react-redux'
import { setUser } from '../../features/auth/authSlice'


const SignUp = ( {navigation} ) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPass, setConfirmPass] = useState('')  
  const [triggerSignUp, result] = useSignUpMutation(
  //   {
  //   onSuccess: (data) => {
  //     dispatch(setUser(data));
  //   },
  // }
  );  
  const dispatch = useDispatch()
  
  const onSubmit = () => {
    console.log(email, password, confirmPass)
    triggerSignUp({
      email,
      password,
    })
    console.log(result)
    if (result.isSuccess) {
      dispatch(setUser(result))
    }
  }

  const navigateToLogin = () => {
    navigation.navigate("Login")  
  }  

  return (
    <View style={styles.container}> 
      <View style={styles.loginContainer}>
        <Text style={styles.title}>
            Regístrate para comenzar
        </Text>
        <TextInput style={styles.inputEmail} 
        placeholder='Email' 
        value={email} 
        onChangeText={setEmail}/>

        <TextInput style={styles.inputEmail} 
        placeholder='Contraseña' 
        value={password} 
        onChangeText={setPassword}/>
        
        <TextInput style={styles.inputEmail} 
        placeholder='Confirmar Contraseña' 
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
  )
}

export default SignUp