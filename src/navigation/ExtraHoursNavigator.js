
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ExtraHours } from '../screens';

const Stack = createNativeStackNavigator()


function ExtraHoursNavigator() {
    return (
        
            <Stack.Navigator initialRouteName="Home"
              screenOptions={() => ({ headerShown: false, })}
            >
              <Stack.Screen name="ExtraHours" component={ExtraHours} />            
            </Stack.Navigator>
    
    )
}

export default ExtraHoursNavigator