import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home, StudentProfile, Students } from '../screens';
import { Header } from "../Components";
import { View, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { colors } from '../constants/colors'

const Stack = createNativeStackNavigator()

function getTitle(route) {
    switch (route.name) {
      case 'Home':
        return 'Cursos 🏫';
      case 'Students':
        return 'Alumnos 📚';
      case 'StudentProfile':
        return 'Alumno 🎓';
      default:
        return 'Otra cosa';
    }
  }

function StackNavigator() {
    return (
        <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={({ route, navigation }) => ({
          headerShown: true,
          header: () => {
            if (route.name === 'Home') {
              
              return (
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, backgroundColor: colors.quinary, borderBottomColor: colors.tertiary, borderBottomWidth: 1, paddingTop: 30 }}>
                  <Header title={getTitle(route)} />
                </View>
              );
            }
            
            return (
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, backgroundColor: colors.quinary, borderBottomColor: colors.tertiary, borderBottomWidth: 1, paddingTop: 30 }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <AntDesign name="back" size={24} color="white" />
                </TouchableOpacity>
                <Header title={getTitle(route)} />
              </View>
            );
          },
        })}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Students" component={Students} />
        <Stack.Screen name="StudentProfile" component={StudentProfile} />
      </Stack.Navigator>
    </NavigationContainer>
    )
}

export default StackNavigator