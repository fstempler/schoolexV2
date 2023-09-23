import { colors } from '../constants/colors';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  ExtraHoursNavigator  from './ExtraHoursNavigator';
import  StackNavigator  from './StackNavigator';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

const BottomTab = createBottomTabNavigator();

function BottomTabNavigator () {
    return (
        <BottomTab.Navigator screenOptions={{ 
            headerShown: false, 
            tabBarShowLabel: false, 
            tabBarStyle: styles.tabBar}}>
            <BottomTab.Screen 
            name="StackNavigator" 
            component={StackNavigator} 
            options={{tabBarIcon: ({focused}) => (                    
                    <FontAwesome name="group" size={24} color={focused ? colors.septenary : colors.tertiary} />
                )
            }}/>
            <BottomTab.Screen 
            name="ExtraHours" 
            component={ExtraHoursNavigator} 
            options={{tabBarIcon: ({focused}) => (                                    
                <MaterialCommunityIcons name="bookshelf" size={30} color={focused ? colors.septenary : colors.tertiary} />
            )
            }}/>            
        </BottomTab.Navigator>
    )
}


export default BottomTabNavigator

const styles = StyleSheet.create ({
    tabBar:{
        backgroundColor: colors.senary,                
    }
})
