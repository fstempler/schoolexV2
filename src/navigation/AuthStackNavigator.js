
import { SignUp, Login } from '../screens';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const AuthStack = createNativeStackNavigator()


function AuthStackNavigator() {
    return (
        
      <AuthStack.Navigator initialRouteName="SignUp" screenOptions={{headerShown:false,}}>        
        
        <AuthStack.Screen name="SignUp" component={SignUp} />
        <AuthStack.Screen name="Login" component={Login} />
        
      </AuthStack.Navigator>
    
    )
}

export default AuthStackNavigator