import { View, Text, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'
import styles from './Login.styles'
import { useLoginMutation } from '../../services/authApi'
import { useDispatch } from 'react-redux'
import { setUser } from '../../features/auth/authSlice'

const Login = ( {navigation} ) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [triggerLogin, result] = useLoginMutation()
  const dispatch = useDispatch()

  const onSubmit = () => {
    console.log(email, password)
    triggerLogin({ 
      email, 
      password 
    })
    console.log(result)
    if (result.isSuccess) {
      dispatch(setUser(result))
    }
  }

  const navigateToSignUp = () => {
    navigation.navigate("SignUp")  
  }

  return (
    <View style={styles.container}>     
      <View style={styles.loginContainer}>
        <Text style={styles.title}>
            Ingresa tus datos
        </Text>
        <TextInput style={styles.inputEmail} placeholder='Email' value={email} onChangeText={setEmail}/>
        <TextInput style={styles.inputEmail} placeholder='Contraseña' value={password} onChangeText={setPassword} />
        <Pressable style={styles.loginButton} onPress={onSubmit}>
            <Text style={styles.loginButtonTxt}>Acceder</Text>
        </Pressable>
        <Text>¿No tienes una cuenta?</Text>
        <Pressable style={styles.registerButton} onPress={navigateToSignUp}>
            <Text style={styles.loginButtonTxt}>Registrare</Text>
        </Pressable>
      </View>
    </View>
  )
}


export default Login